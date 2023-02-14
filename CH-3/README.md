This folder contains the following challenge

Challenge #3

We have a nested object, we would like a function that you pass in the object and a key and get back the value. How this is implemented is up to you. Example Inputs object = {“a”:{“b”:{“c”:”d”}}} key = a/b/c value = d

object = {“x”:{“y”:{“z”:”a”}}} key = x/y/z value = a

in this code i have worked on different example and i have written the code in js format


Approach
Define a function that takes two parameters named

object : the full JSON object keys : an Array of keys in the order

Assumptions
There will be at least one key to search
Any invalid key will return null
The Keys are given in the order as it would appear in the JSON tree
