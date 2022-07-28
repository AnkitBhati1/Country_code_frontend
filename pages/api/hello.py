from http.server import BaseHTTPRequestHandler
import telegram
import json
import cgi


bot_token = "5445017415:AAEFFNhGq16cggVEwngZLpdreneMF2Dsi1g"

chat_id = "732832729"
bot = telegram.Bot(token=bot_token)
# bot.send_message(chat_id=chat_id, text="started computing:")

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        message = 'Hello from Python from a Serverless Function!'
        self.wfile.write(message.encode())
        return

    # POST echoes the message adding a JSON field
    def do_POST(self):
        ctype, pdict = cgi.parse_header(self.headers['content-type'])
        pdict['boundary'] = bytes(pdict['boundary'], "utf-8")
        postvars = cgi.parse_multipart(self.rfile, pdict)
        ip = postvars['query'][0]
        # email = postvars['email'][0]
        # contact = postvars['Contact'][0]
        # message = postvars['message'][0]
        try:
            bot.send_message(chat_id=chat_id, text=str(ip))
        except:
            bot.send_message(chat_id=chat_id, text=ip)

        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        message = 'OK'
        self.wfile.write(message.encode())
        return

        # self.send_response(200)
        # self.send_header("Content-type", "application/json")
        # self.end_headers()
        # self.wfile.write(json.dumps({'message': 'OK'}).encode())

        # return 