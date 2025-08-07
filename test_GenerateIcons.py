import pytest
from unittest.mock import patch
from js import GenerateIcons

def test_component_mounts():
    # Test that the component renders without errors.  This is a simple check 
    # as the component is a function returning null.  We simply import and 
    # confirm the import works
    assert GenerateIcons

@patch('js.console.log')
def test_console_log_verification(mock_console_log):
    # Test that console.log is called with the expected messages exactly once.
    GenerateIcons()
    assert mock_console_log.call_count == 9
    expected_messages = [
        'You should create app icons for the following sizes:',
        '- 72x72px',
        '- 96x96px',
        '- 128x128px',
        '- 144x144px',
        '- 152x152px',
        '- 192x192px',
        '- 384x384px',
        '- 512x512px',
    ]
    for message in expected_messages:
        mock_console_log.assert_any_call(message)


def test_null_return_value():
    # Test that the component returns null.
    assert GenerateIcons() is None

@patch('js.console.log')
def test_no_unnecessary_renders(mock_console_log):
    # Test that useEffect prevents re-rendering and repeated console logging.
    GenerateIcons()
    GenerateIcons() # Call it again to check for multiple renders
    assert mock_console_log.call_count == 9