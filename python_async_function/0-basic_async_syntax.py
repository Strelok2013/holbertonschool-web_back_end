#!/usr/bin/env python3
''' This module takes in an integer argument (max_delay)
waits for a random delay seconds and eventually returns it.'''
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    ''' This asynce function defines a max_delay value
    and its default then uses await to wait for random secs
    then returns it'''

    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay