const timeUpdateFun = () => {
    return new Promise( (res, rej ) => {
        setTimeout( () => {
            res(new Date().toLocaleTimeString())
        }, 1000)
    })
}

const timeRunFun = async () => {
    try {
        while (true) {
            const timeValue = await timeUpdateFun()
            console.clear();
            console.log(timeValue);
        }
    } catch (error) {
        console.log(error);
    }
}

const digitalClock = () => {
    timeRunFun()
}
digitalClock()