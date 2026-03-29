"""
Base module providing a generic Base class with fundamental methods.
This serves as a foundation for other classes in the repository.
"""

class Base:
    """
    A generic base class providing common functionality like initialization,
    validation, and dictionary conversion.
    """

    def __init__(self, **kwargs):
        """
        Initialize the Base instance with provided attributes.

        Args:
            **kwargs: Arbitrary keyword arguments representing attributes.
        """
        self._data = kwargs
        self.validate()

    def validate(self):
        """
        Validate the instance's data. To be overridden by subclasses if needed.

        Raises:
            ValueError: If validation fails.
        """
        pass

    def to_dict(self):
        """
        Convert the instance's data to a dictionary.

        Returns:
            dict: A dictionary representation of the instance's data.
        """
        return self._data.copy()

    def __repr__(self):
        """
        Return a string representation of the instance.

        Returns:
            str: String representation.
        """
        return f"{self.__class__.__name__}({self._data})"