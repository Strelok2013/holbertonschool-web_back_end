#!/usr/bin/env python3
''' this module takes a string k and an int
OR float v as arguments and returns a tuple.'''
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''function that returns sum as a float.

    Args:
        mxd_list (list): A list of integers and floats.

    Returns:
        float: convert sum to float.
    '''
    return (k, v ** 2)