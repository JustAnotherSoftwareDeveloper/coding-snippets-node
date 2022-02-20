# coding-snippets-node

These are small coding snippets of problems I find on the web.

## To Run

There is no formal way to run the problems here. However, running `npm i` and `npm run test` will show you the code is working.

# Capitalize N

1 . Write a function that capitalizes _only_ the nth alphanumeric character of a string, so that if I hand you

Aspiration.com

and I ask you to capitalize every 3rd character, you hand me back

asPirAtiOn.cOm

If I ask you to capitalize every 4th character, you hand me back

aspIratIon.cOm

Please note:

- Characters other than each third should be downcased
- For the purposes of counting and capitalizing every three characters, consider only alphanumeric
  characters, ie [a-z][a-z][0-9].

## DoubleSet

Implement the DoubleSet data structure described below.

A DoubleSet is a collection whose members are integers, and who can have one or two of each member. We express them below in
maplike notation, ie the DoubleSet that has two 1s, one -3, and one 0 is represented as

{{1: 2}, {-3: 1}, {0: 1}}

If a DoubleSet has two of member 1, we may not add a third. If a
DoubleSet has zero of member 3, we may not take any away, because there is nothing to take away from.

We add two DoubleSets by adding each of their members, each of whose count can be no greater than two:

doubleSetOne has members

{{1: 2}, {2: 1}}

and doubleSetTwo has members

{{1: 1}, {2: 1}, {-3: 1}}

their sum is

{{1: 2}, {2: 2}, {-3: 1}}

We subtract two DoubleSets by subtracting each of their counts, where elements whose counts fall below one are removed
from the DoubleSet entirely:

doubleSetOne has members

{{1: 2}, {2: 1}, {4: 1}}

and doubleSetTwo has members

{{1: 1}, {2: 2}, {-3: 1}}

their difference is

{{1: 1}, {4: 1}}
