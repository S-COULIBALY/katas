def show_game_points(players_score):
    game_scores = [0, 15, 30, 40]
    return [game_scores[players_score['j1']],
            game_scores[players_score['j2']]]

def game_score_calculus(winners):
    game_score = {'j1': 0, 'j2': 0}

    for winner in winners:
        game_score[winner] += 1

    return game_score

def game_score(winners):
   return show_game_points(game_score_calculus(winners))
