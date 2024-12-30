#!/usr/bin/env python3
""" Module for async generator task 1"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    This function creates a coroutine called async_comprehension.
    This coroutine will collect 10 random numbers from the
    async_generator using an asynchronous
    comprehension and return them
    """
    results = [i async for i in async_generator()]
    return results