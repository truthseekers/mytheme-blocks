import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { RichText, BlockControls, InspectorControls, AlignmentToolbar,
PanelColorSettings, withColors } from "@wordpress/editor";

class Edit extends Component {

    onChangeContent = (content) => {
        this.props.setAttributes({content})
    }
    onChangeAlignment = (alignment) => {
        this.props.setAttributes({alignment})
    }
    onChangeBackgroundColor = (backgroundColor) => {
        this.props.setAttributes({backgroundColor})
    }
    onChangeTextColor = (textColor) => {
        this.props.setAttributes({textColor})
    }

    render() {
        console.log(this.props);
        const { className, attributes, setAttributes } = this.props;
        const { content, alignment, backgroundColor, textColor } = attributes;
        return (
            <>
                <InspectorControls>
                    <PanelColorSettings
                        title={ __('Panel', 'mytheme-blocks')}
                        colorSettings={[
                            {
                                value: backgroundColor,
                                onChange: this.onChangeBackgroundColor,
                                label:  __('Background Color', 'mytheme-blocks')
                            },
                            {
                                value: textColor,
                                onChange: this.onChangeTextColor,
                                label:  __('Text Color', 'mytheme-blocks')
                            }
                        ]}
                    />
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={this.onChangeAlignment}
                    />
                </BlockControls>
                <RichText
                    tagName="p"
                    className={ className } 
                    onChange={ this.onChangeContent }
                    value={content}
                    formattingControls={['bold']}
                    style={{ textAlign: alignment, backgroundColor: backgroundColor,
                        color: textColor }}
                />
                {/* return <p className={className}>Editor</p>; */}
            </>
        )
    }
}   
// look in the console when in editor and notice available "props" like setbackgroundColor and setTextColor
export default withColors('backgroundColor', 'textColor', )(Edit);