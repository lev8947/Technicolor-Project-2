USE enviroHub_db
INSERT INTO user (first_name, last_name, password, email, country_name, age)
VALUES ("Frank", "Boon", "Frank", "frank@test.com", "Australia", 45),
        ("Hill", "Billy", "Hill", "hill@test.com", "United States", 23),
        ("Sally", "Tree", "Sally", "Sally@test.com", "France", 21)

;
     
INSERT INTO goals (user_id, goal1, goal2, goal3)
VALUES (1, "Used a keep cup", "Bought plastic free fruit & veg", "Collected soft plastics for recycling"),
        (2, "Walked or cycled instead of driving", "Carpooled to work", "Collect 10c for recycling"),
        (3, "Put food in the kitchen compost bin", "Refuse plastic cutlery", " Bring your own bags when shopping")     

;