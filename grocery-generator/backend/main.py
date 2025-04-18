from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
from pydantic import BaseModel

app = FastAPI()

# CORS setup to allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample recipe database
recipes = [
    {
        "name": "Grilled Chicken with Rice and Peas",
        "ingredients": ["chicken", "rice", "peas", "garlic", "salt", "pepper", "olive oil"],
    },
    {
        "name": "Apple Chicken Salad",
        "ingredients": ["chicken", "apple", "lettuce", "walnuts", "lemon", "olive oil"],
    },
    {
        "name": "Baked Apple Chicken",
        "ingredients": ["chicken", "apple", "honey", "thyme", "butter"],
    },
    {
        "name": "Chicken Stir Fry",
        "ingredients": ["chicken", "soy sauce", "garlic", "onion", "bell pepper", "rice"],
    }
]

class MealPlan(BaseModel):
    meal_name: str
    ingredients: List[str]

def match_recipes(user_ingredients: List[str]) -> List[Dict]:
    matches = []
    for recipe in recipes:
        overlap = set(user_ingredients).intersection(recipe["ingredients"])
        if len(overlap) >= 1:  # Adjust threshold here
            matches.append({
                "meal_name": recipe["name"],
                "ingredients": recipe["ingredients"]
            })
    return matches

@app.get("/generate", response_model=List[MealPlan])
def generate_grocery_list(ingredients: List[str] = Query(...)):
    suggestions = match_recipes([i.lower() for i in ingredients])
    return suggestions