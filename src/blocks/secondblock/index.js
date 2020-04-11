import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText, BlockControls } from "@wordpress/editor";
import { Toolbar, DropdownMenu } from "@wordpress/components";
 // <> and </> is shortcut for "fragment"
import './styles.editor.scss';

//const { registerBlockType } = wp.blocks;
//const { __ } = wp.i18n;

registerBlockType('mytheme-blocks/secondblock', {
    title: __('Second Block', 'mytheme-blocks'),
    description: __('Our second block', 'mytheme-blocks'),
    category: 'layout',
    icon: {
        background: '#f03',
        foreground: '#fff',
        src: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
    },
    keywords: [__('Photo', 'mytheme-blocks'), __('Image', 'mytheme-blocks')],
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },
    edit: ({ className, attributes, setAttributes }) => {
        //console.log(attributes);
        const { content } = attributes;
        const onChangeContent = (content) => {
            setAttributes({content})
        }
        return (
            <>
                <BlockControls 
                    controls={[
                        [{
                            icon: 'wordpress',
                            title: __('test', 'mytheme-blocks'),
                            onClick: () => alert(true),
                            isActive: true
                        }],
                        [{
                            icon: 'wordpress',
                            title: __('test', 'mytheme-blocks'),
                            onClick: () => alert(true),
                            isActive: false 
                        }]
                    ]}
                >
                    <Toolbar
                        isCollapsed
                        controls={[
                            [{
                                icon: 'wordpress',
                                title: __('yodog', 'mytheme-blocks'),
                                onClick: () => alert(true),
                                isActive: true
                            }],
                            [{
                                icon: 'wordpress',
                                title: __('test', 'mytheme-blocks'),
                                onClick: () => alert(true),
                                isActive: false 
                            }]
                        ]}
                    />
                    {(content && content.length > 0) &&
                        <Toolbar>
                            <DropdownMenu
                                icon="editor-table"
                                label={ __('testDropdown', 'mytheme-blocks')}
                                controls={[
                                    [{
                                        icon: 'wordpress',
                                        title: __('yodog', 'mytheme-blocks'),
                                        onClick: () => alert(true),
                                        isActive: true
                                    }],
                                    [{
                                        icon: 'wordpress',
                                        title: __('test', 'mytheme-blocks'),
                                        onClick: () => alert(true),
                                        isActive: false 
                                    }]
                                ]}
                            />
                        </Toolbar>
                    }
                </BlockControls>
                <RichText
                tagName="p"
                className={ className } 
                onChange={ onChangeContent }
                value={content}
                formattingControls={['bold']}
                />
                {/* return <p className={className}>Editor</p>; */}
            </>
        )
    },
    save: ({ attributes }) => {
        const { content } = attributes;
        return <RichText.Content
            tagName="p"
            value={ content }
        />;
        //return <p>{content}</p>
        //return <p>Saved Content</p>;
    }
})