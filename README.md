# TwitterBotInsultos
# export BEARER_TOKEN=AAAAAAAAAAAAAAAAAAAAABvUbwEAAAAAeZTJTwX9Cvvz6jhoW41W6iCuiOA%3DvANkVjLMZ99bXTqi6U1Xd03EJTu086dN7ZDQe9KiuhdCZQQIUM
# Buscar por su @ a un user, en este caso a, GMCarlos_8
curl "https://api.twitter.com/2/users/by/username/InsultarBot" -H "Authorization: Bearer $BEARER_TOKEN"
{"data":{"id":"1518904631409221632","name":"Insultar Bot","username":"InsultarBot"}}

# id de la cuenta @InsultarBot es 1518904631409221632
# recoger las menciones a nuestro
# get_mentions
curl "https://api.twitter.com/2/users/1518904631409221632/mentions" -H "Authorization: Bearer $BEARER_TOKEN"
Este sería el resultado:
{"data":[{"id":"1519685748651446272","text":"Insulta @InsultarBot"}],"meta":{"result_count":1,"newest_id":"1519685748651446272","oldest_id":"1519685748651446272"}}


# Insultar a esta cuenta con el insulto generado
# en text se pone el insulto más el @ que extraemos del text anter
# en el quote_tweet_id el id del tweet que me mencionó (para el ejemplo de arriba seria 1519685748651446272)
# para que solo responda a los que pongan bien el mensaje, habría que parsear el mensaje de nuestra mención para que cumpla
# ciertas reglas, si lo hace, insulto y sino, "Se ve que leer mensajes fijados en mi perfil no es lo tuyo, crack."
curl -X POST "https://api.twitter.com/2/tweets" -H "Authorization: OAuth $OAUTH_SIGNATURE" -H "Content-type: application/json" -d '{"text":"Aqui se pone el insulto y el @","quote_tweet_id":"1519685748651446272"}'