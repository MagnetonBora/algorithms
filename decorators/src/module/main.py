
def factory(arg1, arg2):
    def decorator(fn):
        def wrapper():
            print 'pre-process', arg1, arg2
            fn()
            print 'post-process', arg1, arg2
        return wrapper
    return decorator

@factory(1, 2)
def foo():
    print 'fuck you'

def f():
    
    arr = [-1, -2, -3, -4, -5, -6];
    
    l = 0
    r = len(arr) - 1
    length = len(arr)
    
    print arr
    
    while (l <= r):
        
        while (l < length and arr[l] <= 0):
            l = l + 1
            
        while (r >= 0 and arr[r] <= 0):
            r = r - 1
            
        if (l <= r):
            buf = arr[l]
            arr[l] = arr[r]
            arr[r] = buf
            l = l + 1
            r = r - 1
            
    print arr
    
    return

f() 

if __name__ == '__main__':
    pass