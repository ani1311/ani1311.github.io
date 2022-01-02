import json

def getBoolAns(q):
    print(q + "?y/n")
    ans = input()
    if ans == "y":
        return True
    else:
        return False

a_file = open("habitUpdate.json", "r")
habits = json.load(a_file)
a_file.close()

print("Month?")
month = input()

print("Day")
day = input()

meditation = getBoolAns("Meditation")
coldShower = getBoolAns("Cold Shower")
noPhone = getBoolAns("No Phone")
NF = getBoolAns("NF")

if month not in habits:
    habits[month] = {}

if day not in habits[month]:
    habits[month][day] = {}


habits[month][day]["meditation"] = meditation 
habits[month][day]["coldShower"] = coldShower 
habits[month][day]["noPhone"] = noPhone 
habits[month][day]["NF"] = NF 

print(json.dumps(habits))

o_file = open("habitUpdate.json", "w")
json.dump(habits, o_file)
o_file.close()
