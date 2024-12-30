#!/usr/bin/env python3
''' this module takes a list input_list of
floats as argument and returns their sum as a float.'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    '''function that returns sum as a float.

    Args:
        input_list (list): A list of numbers.

    Returns:
        float: convert sum to float.
    '''
    return float(sum(input_list))