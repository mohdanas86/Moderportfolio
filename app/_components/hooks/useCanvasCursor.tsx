// @ts-nocheck
import { useEffect } from "react";

const useCanvasCursor = () => {
  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  function Line(e) {
    this.init(e || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring || 0.45;
      this.friction = E.friction;
      this.nodes = [];
      for (var t, n = 0; n < E.size; n++) {
        t = new Node();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    },
    update: function () {
      var e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (var n, i = 0, a = this.nodes.length; i < a; i++) {
        t = this.nodes[i];
        if (0 < i) {
          n = this.nodes[i - 1];
          t.vx += (n.x - t.x) * e;
          t.vy += (n.y - t.y) * e;
          t.vx += n.vx * E.dampening;
          t.vy += n.vy * E.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= E.tension;
      }
    },
    draw: function () {
      if (this.nodes.length < 2) return;
      var e,
        t,
        n = this.nodes[0].x,
        i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      if (this.nodes.length > 2) {
        e = this.nodes[this.nodes.length - 2];
        t = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      }
      ctx.stroke();
      ctx.closePath();
    },
  };

  function onMousemove(e) {
    function o() {
      lines = [];
      for (var e = 0; e < E.trails; e++)
        lines.push(new Line({ spring: 0.48 + e * 0.04 }));
    }
    function c(e) {
      if (e.touches) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    }
    function l(e) {
      if (1 === e.touches.length) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      }
    }
    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("touchstart", onMousemove);
    document.addEventListener("mousemove", c, { passive: true });
    document.addEventListener("touchmove", c, { passive: true });
    document.addEventListener("touchstart", l, { passive: true });
    c(e);
    o();
    render();
  }

  function render() {
    if (ctx && ctx.running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // Refined, subtle warm brand orange trail (#FF7A00)
      ctx.strokeStyle = "rgba(255, 122, 0, 0.18)";
      ctx.lineWidth = 1.0;

      for (var e, t = 0; t < E.trails; t++) {
        e = lines[t];
        if (e) {
          e.update();
          e.draw();
        }
      }

      ctx.frame++;
      window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    if (ctx && ctx.canvas) {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }
  }

  var ctx,
    pos = { x: -100, y: -100 },
    lines = [],
    E = {
      debug: false,
      friction: 0.84,  // High friction: stops wild whipping & rippling
      trails: 2,       // Only 2 minimal lines: clean, compact filament
      size: 10,        // Short node length: follows closely at cursor tip
      dampening: 0.55, // Strong damping: prevents bouncing oscillations
      tension: 0.82,   // Soft tension: smooth, fluid movement
    };

  const renderCanvas = function () {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.running = true;
    ctx.frame = 1;
    document.addEventListener("mousemove", onMousemove, { passive: true });
    document.addEventListener("touchstart", onMousemove, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
      if (ctx && !ctx.running) {
        ctx.running = true;
        render();
      }
    });
    window.addEventListener("blur", () => {
      if (ctx) ctx.running = false;
    });
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      if (ctx) ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
