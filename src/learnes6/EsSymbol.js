import React, { Component} from 'react'

export default class EsSymbol extends Component {
    // const s = Symbol();
    render() {
        let s = Symbol();
        let s1 = Symbol('foo');
        let s2 = Symbol('bar');

        s1 // Symbol(foo)
        s2 // Symbol(bar)

        s1.toString() // "Symbol(foo)"
        s2.toString() // "Symbol(bar)"
        const set = new Set();

        [2, 3, 5, 4, 5, 2, 2].forEach(x => set.add(x));

        console.log(set);
        // 例一
        const set1 = new Set([1, 2, 3, 4, 4]);
        [...set1]
        // [1, 2, 3, 4]

        // 例二
        const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
        items.size // 5

        // 例三
        const set2 = new Set(document.querySelectorAll('root'));
        set2.size // 56

        // 类似于
        const set3 = new Set();
        document
            .querySelectorAll('div')
            .forEach(div => set3.add(div));
        set3.size // 56
        console.log("set1 ", set1);
        console.log("set2 ", set2);
        console.log("set3 ", set3);
        const map = new Map()
            .set(1,'a')
            .set(2,'b')
            .set(3,'c');
        const filterMap = new Map([...map].map(([k,v]) => [k+3, '_'+v]));
        console.log(" map ",map);
        console.log(" after filter map ", filterMap);
        const map2 = new Map(
            [...map].map(([k, v]) => [k * 2, '_' + v])
        );
        console.log(" after filter map ", map2);
        return (
            <div>
                PropTypes.array,
                {typeof s} == 
                {typeof s1} == 
                {typeof s2} == 
                {s1.toString()}
            </div>
        )
    }
}
