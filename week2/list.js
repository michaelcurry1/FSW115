var list = {
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The title of Adolf Hitler&#039;s autobiography &quot;Mein Kampf&quot; is what when translated to English?",
            "correct_answer": "My Struggle",
            "incorrect_answers": [
                "My Hatred",
                "My Sadness",
                "My Desire"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What year did Australia become a federation?",
            "correct_answer": "1901",
            "incorrect_answers": [
                "1910",
                "1899",
                "1911"
            ]
        }
    ]
}
var incorrectAnswers = document.getElementById("incorrect_answers")

for (var i = 0; i < list.length; i++){
    var newName = document.createElement("li")
    newName.textContent = list[i]
    incorrectAnswers.append(newName)
}