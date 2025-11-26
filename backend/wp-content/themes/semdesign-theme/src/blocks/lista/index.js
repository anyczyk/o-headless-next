import { registerBlockType } from '@wordpress/blocks';
import { Button, TextControl, TextareaControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import './editor.scss';
// import './style.scss';

registerBlockType('semdesign/lista', {
    edit: ({ attributes, setAttributes }) => {
        const { items } = attributes;
        const blockProps = useBlockProps();

        const addItem = () => {
            const newItems = [...items, { title: '', description: '' }];
            setAttributes({ items: newItems });
        };

        const updateItem = (value, index, field) => {
            const newItems = [...items];
            newItems[index][field] = value;
            setAttributes({ items: newItems });
        };

        const removeItem = (index) => {
            const newItems = [...items];
            newItems.splice(index, 1);
            setAttributes({ items: newItems });
        };

        return (
            <div {...blockProps}>
                {items.map((item, index) => (
                    <div key={index} className="repeater-item">
                        <TextControl
                            label="Tytuł"
                            value={item.title}
                            onChange={(value) => updateItem(value, index, 'title')}
                            placeholder={`Tytuł ${index + 1}`}
                        />
                        <TextareaControl
                            label="Opis"
                            value={item.description}
                            onChange={(value) => updateItem(value, index, 'description')}
                            placeholder={`Opis ${index + 1}`}
                        />
                        <Button isDestructive onClick={() => removeItem(index)}>
                            Usuń
                        </Button>
                        <hr />
                    </div>
                ))}
                <Button isPrimary onClick={addItem}>
                    Dodaj pozycję
                </Button>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { items } = attributes;
        const blockProps = useBlockProps.save();
        const actionTest = (index) =>{
            alert("x" + index);
        };

        return (
            <ul {...blockProps}>
                {items.map((item, index) => (
                    <li key={index}>
                        <strong onClick={actionTest}>x1 c1 b1: {item.title}</strong>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        );
    },
});