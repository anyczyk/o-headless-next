import React, {useRef, useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <div>
                <button onClick={decreaseCounter}> -</button> <button onClick={increaseCounter}> +</button>
            </div>
            <p>{counter}</p>
        </div>
    );
};

const Stoper = () => {
    const [stoper, setStoper] = useState(0);
    const [stopCounter, setStopCounter] = useState(true);
    const stoperFun = useRef(null);
    const start = () => {
        if(stopCounter) {
            setStopCounter(false);
            stoperFun.current = setInterval(() => {
                setStoper(n => n + 0.1);
            }, 100);
        }
    };
    const pause = () => {
        if(!stopCounter) {
            setStopCounter(true);
            clearInterval(stoperFun.current);
        }
    };

    const stop = () => {
        pause();
        setStoper(0);
    };


    return (
        <div>
            {stoper > 0 ?
                <><button onClick={stop}>Stop</button> {!stopCounter ? <button onClick={pause}>Pause</button> : <button onClick={start}>Resume</button>}</>
                :
                <button onClick={start}>Start</button>}
            <br />
            {stoper > 0 ? stoper.toFixed(1) : 0}
        </div>
    );
};

const names = [['1','John'], ['2','David'],['3','Steven']];

export const AlotOfSamllApps = () => {
    const [numberLottery] = useState( () => Math.floor(Math.random() * 10));

    const [reverseVal, setReversVal] = useState('');
    const [palindoromeVal, setPalindromeVal] = useState('');

    const isEven = (n) => {
        const num = !isNaN(Number(n));
        return (num && !(n%2));
    };

    const isOdd = (n) => {
        const num = !isNaN(Number(n));
        return (num && (n%2));
    };

    const countEven = (arr) => {
        let j= 0;
        for(let i = 0; i < arr.length; i++) {
            if(isEven(arr[i])) j++;
        }
        return j;
    };

    const countOdd = (arr) => {
        let j= 0;
        for(let i = 0; i < arr.length; i++) {
            if(isOdd(arr[i])) j++;
        }
        return j;
    };

    // reverse string
    const reverseString = (st) => {
        return st.split('').reverse().join('');
    }

    const reverseStringHandle = (e) => {
        setReversVal(e.target.value);
    };

    const palindoromeStringHandle = (e) => {
        return setPalindromeVal(e.target.value);
    };

    const [lotteryNumbersV, setLotteryNumbersV] = useState([]);
    const lotteryNumbers = () => {
        const countNumbers = 3;
        const lotteryArray = [];
        for(let i = 0; i < countNumbers; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            lotteryArray.push(randomNumber);
        }
        setLotteryNumbersV(lotteryArray);
    };

    const RadioPlayer = ({ streamUrl }) => (
        <audio controls autoPlay>
            <source src={streamUrl} type="audio/mpeg" />
            Twoja przeglądarka nie wspiera odtwarzania audio.
        </audio>
    );

    const [activeItemIndex, setActiveItemIndex] = useState(null);

    const handleItemActive = (e, index) => {
        if(e.target.closest('li').classList.contains('bg-black')) {
            setActiveItemIndex(null);
            console.log("color black");
        } else {
            console.log("color?");
            setActiveItemIndex(index);
        }
    };

    return (
        <>


            <p>Active index: {activeItemIndex}</p>
            <ul>
                {names.map((item,index) => {
                    return (
                        <li onClick={(e) => handleItemActive(e, index)} className={`cursor-pointer ${activeItemIndex === index ? 'bg-black text-white' : 'bg-white text-black'}`} key={item[0]}>
                            {item[1]}, id unique: {item[0]} - id array: {index}
                        </li>
                    );
                })}
            </ul>

            <RadioPlayer streamUrl="https://rs102-krk-cyfronet.rmfstream.pl/rmf_top_5_pop" />

            <h3>Stoper</h3>
            <Stoper />

            <h3>Counter</h3>
            <Counter />

            <p>Random number: {numberLottery} this is {isEven(numberLottery) ? 'even' : 'odd'} number</p>

            <h3>Revers string:</h3>
            <input type="text" onChange={reverseStringHandle} value={reverseVal}/>
            <p>{reverseString(reverseVal)}</p>
            <h3>Check if a string is a palindrome:</h3>
            <input type="text" value={palindoromeVal} onChange={palindoromeStringHandle} />
            <p>{ palindoromeVal === reverseString(palindoromeVal) ? 'String is palindorome' : 'String is not palindrome' }</p>

            <h3>Lottery Numbers</h3>
            <button onClick={lotteryNumbers}>Click</button>
            <ul>{lotteryNumbersV.map((n, index) => {
                return <li key={index}>{n}</li>;
            })}</ul>
            <p>Count Even: {countEven(lotteryNumbersV)}</p>
            <p>Count Odd: {countOdd(lotteryNumbersV)}</p>
        </>
    );
}
