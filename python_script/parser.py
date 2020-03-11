import requests
import json


base_URL = "http://opendata.kz/api/sensor/history/list?opts=%7B%22where%22:%7B%22sensor_id%22:%7B%22%3D%22:"

second_URL = "%7D%7D,%22order%22:%5B%22created_at+DESC%22%5D,%22limit%22:6%7D"
sensors = [68, 63, 101, 86, 71, 108, 80, 99, 60, 109, 59, 70, 78, 83, 93, 107, 4, 66, 85, 97, 104, 79, 89, 1, 77, 90, 92, 76, 106, 87, 100, 68, 82, 81, 72, 73, 105, 88, 98, 96, 75, 62, 91, 84, 69, 74, 95, 102, 94, 6]


def get_html(sensor_id):
    """
    get json page by sensor id
    """
    response = requests.get(base_URL+str(sensor_id)+second_URL)
    return response.text


def get_pm25(json_file):
    dict = json.loads(json_file)
    a = dict['list'][0]['data']['field2']
    return a



while True:
    
    for i in range(len(sensors)):
        
        with open('../src/data.json', 'r') as f:
            
            data_json = json.load(f)
            data_json[i]['intense'] = get_pm25(get_html(sensors[i]))
            print ("Обновление ",sensors[i],'-го сенсора. Принял новое значение ',get_pm25(get_html(sensors[i])))
        with open('../src/data.json', 'w') as f:
            json.dump(data_json, f)
        

#radar sentinel
