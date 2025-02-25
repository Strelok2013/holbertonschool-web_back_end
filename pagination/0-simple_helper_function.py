#!/usr/bin/env python3
""" Module to calculate the range of indexes
for a specific page in pagination."""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """ This function calculates the start index and end index
    and returns a tuple of the results
    """
    start_idx = (page - 1) * page_size
    end_idx = page * page_size
    return (start_idx, end_idx)