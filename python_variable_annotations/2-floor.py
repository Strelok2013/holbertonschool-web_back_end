#!/usr/bin/env python3
''' this module takes a float n as argument and
returns the floor of the float'''
import math


def floor(floor: float) -> int:
    '''function that returns floor of the float.

    Args:
        n (float): A floating-point number.

    Returns:
        int: The largest integer less then or equal to the float.
    '''
    return math.floor(floor)