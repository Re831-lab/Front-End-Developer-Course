import threading
import time

counter = 0
NUM_THREADS = 5
INCREMENTS = 1000

def increment_without_mutex():
    global counter
    for _ in range(INCREMENTS):
        temp = counter     
        time.sleep(0.00001) 
        counter = temp + 1  

threads = []
for _ in range(NUM_THREADS):
    t = threading.Thread(target=increment_without_mutex)
    threads.append(t)
    t.start()

for t in threads:
    t.join()

expected = NUM_THREADS * INCREMENTS
print(f"Expected : {expected}")
print(f"Actual   : {counter}")
print(f"Lost updates: {expected - counter}")