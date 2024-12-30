#!/usr/bin/env python3
""" This module demonstrates returns
the list of school having a specific topic"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """ this function returns the list of school
      having a specific topic """
    my_list = []
    schools = mongo_collection.find(
        { "topics": topic }
    )

    if schools is not None:
        for school in schools:
            my_list.append(school)
    return my_list