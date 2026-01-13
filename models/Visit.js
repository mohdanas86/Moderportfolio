import mongoose from "mongoose";

const visitSchema = new mongoose.Schema(
    {
        count: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

// Use a static method to get or create the counter document
visitSchema.statics.getCounter = async function () {
    let counter = await this.findOne();
    if (!counter) {
        counter = await this.create({ count: 0 });
    }
    return counter;
};

visitSchema.statics.increment = async function () {
    const counter = await this.getCounter();
    counter.count += 1;
    await counter.save();
    return counter.count;
};

const Visit = mongoose.models.Visit || mongoose.model("Visit", visitSchema);

export default Visit;