window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return {
        addClass(className) {
            this.each(n => n.classList.add(className))
        }, //每循环到一个元素就加一个className
        find(selector) {
            let array = []
            this.each(n => {
                array.push(...n.querySelectorAll(selector))
            }) //...展开运算符,对每一个selector元素 实行这个循环
            return jQuery(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i) //对每一个元素执行fn
            }
        },
        remove(selector) {
            elements.remove()
        }

        }
    }
}

window.$ = window.jQuery

$('#test').find('.child').addClass('red')