#!/usr/bin/env python3
""" Module for async generator task 1"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    This function creates a coroutine called async_comprehension.
    This coroutine will collect 10 random numbers from the async_generator
      using an asynchronous comprehension and return them
    """

    results = []
    start = time.time()
    for _ in range(4):
        result = async_comprehension()
        results.append(result)
    await asyncio.gather(*results)
    end = time.time()

    return end - start