"""
Tests for the Base class.
"""

import unittest
from base import Base

class TestBase(unittest.TestCase):
    """Test cases for the Base class."""

    def setUp(self):
        """Set up test fixtures."""
        self.test_data = {"key": "value"}
        self.base_instance = Base(**self.test_data)

    def test_init(self):
        """Test initialization of Base instance."""
        self.assertEqual(self.base_instance._data, self.test_data)

    def test_to_dict(self):
        """Test conversion of Base instance to dictionary."""
        self.assertEqual(self.base_instance.to_dict(), self.test_data)

    def test_validate(self):
        """Test validation method (should pass by default)."""
        try:
            self.base_instance.validate()
        except ValueError:
            self.fail("validate() raised ValueError unexpectedly!")

    def test_repr(self):
        """Test string representation of Base instance."""
        expected_repr = f"Base({self.test_data})"
        self.assertEqual(repr(self.base_instance), expected_repr)

if __name__ == "__main__":
    unittest.main()