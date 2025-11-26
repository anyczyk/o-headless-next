import {useRef, useState} from "@wordpress/element";
import {TextareaControl} from "@wordpress/components";

export const TextareaWithFormatting = ({ item, index, updateItem }) => {
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    const textareaRef = useRef(null);

    const handleSelectionChange = () => {
        if (textareaRef.current) {
            const start = textareaRef.current.selectionStart;
            const end = textareaRef.current.selectionEnd;
            setSelection({ start, end });
        }
    };

    const wrapSelection = (tag) => {
        const text = item.description || '';
        const { start, end } = selection;
        if (start === end) return;
        const before = text.slice(0, start);
        const selected = text.slice(start, end);
        const after = text.slice(end);
        let wrapped;
        if (tag === 'a') {
            wrapped = `<a target="_blank" href="#">${ selected }</a>`;
        } else {
            wrapped = `<${tag}>${ selected }</${tag}>`;
        }
        const newText = before + wrapped + after;
        updateItem(index, { pinDescription: newText });
        setSelection({ start: 0, end: 0 });
    };

    return (
        <>
            <TextareaControl
                label="Description"
                value={ item.pinDescription }
                onChange={ ( value ) => updateItem(index, { pinDescription: value }) }
                onKeyUp={ handleSelectionChange }
                onMouseUp={ handleSelectionChange }
                ref={ textareaRef }
            />

            <button
                className="components-button is-secondary fw-bold"
                disabled={selection.start === selection.end}
                onClick={() => wrapSelection('strong')}
            >
                b
            </button>
            {' '}
            <button
                className="components-button is-secondary fst-italic"
                disabled={selection.start === selection.end}
                onClick={() => wrapSelection('i')}
            >
                i
            </button>
            {' '}
            <button
                className="components-button is-secondary"
                disabled={selection.start === selection.end}
                onClick={() => wrapSelection('a')}
            >
                link
            </button>
        </>
    );
};