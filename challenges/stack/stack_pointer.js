const Stack = () => {
    const data = []
    let top = -1

    const put = (value) => {
        top++
        data[top] = value
    }

    const takeOff = () => {
        if (top<0) return "Empty Stack"
        const lastItem = data[top]
        data.splice(top, 1)
        top--
        return lastItem
    }

    const print = () => {
        console.log(data)
    }

    return {
        put, takeOff, print
    }
}

const stack = Stack()
stack.put(2)
stack.print()
stack.put(5)
stack.print()
stack.takeOff()
stack.print()
stack.takeOff()
console.log(stack.takeOff())