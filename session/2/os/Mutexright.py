import threading
import time

counter = 0
NUM_THREADS = 5
INCREMENTS = 1000
mutex = threading.Lock()

def increment_with_mutex():
    global counter
    for _ in range(INCREMENTS):
        mutex.acquire()
        temp = counter
        time.sleep(0.00001)
        counter = temp + 1
        mutex.release()

threads = []
for _ in range(NUM_THREADS):
    t = threading.Thread(target=increment_with_mutex)
    threads.append(t)
    t.start()

for t in threads:
    t.join()

expected = NUM_THREADS * INCREMENTS
print(f"Expected : {expected}")
print(f"Actual   : {counter}")
print(f"Correct  : {counter == expected}")