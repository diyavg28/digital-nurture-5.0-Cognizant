-- Task 2: Verify Normalisation

-- 1NF:
-- All attributes contain atomic values.
-- No repeating groups or multivalued attributes exist.

-- 2NF:
-- All non-key attributes depend on the primary key.
-- No partial dependency exists.

-- 3NF:
-- No transitive dependency exists.
-- Department information is stored separately in departments table.
-- Students, courses and professors reference departments using foreign keys.

SELECT 'Schema satisfies 1NF, 2NF, 3NF' AS Result;