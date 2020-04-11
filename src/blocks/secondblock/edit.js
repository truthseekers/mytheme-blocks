import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { RichText, BlockControls, InspectorControls, AlignmentToolbar,
PanelColorSettings, withColors, ContrastChecker } from "@wordpress/editor";

class Edit extends Component {

    onChangeContent = (content) => {
        this.props.setAttributes({content})
    }
    onChangeAlignment = (alignment) => {
        this.props.setAttributes({alignment})
    }

    render() {
        console.log(this.props);
        const { className, attributes, setTextColor, setBackgroundColor,
        backgroundColor, textColor } = this.props;
        const { content, alignment } = attributes;
        console.log("color is: "); 
        console.log(textColor);
        return (
            <>
                <InspectorControls>
                    <PanelColorSettings
                        title={ __('Panel', 'mytheme-blocks')}
                        colorSettings={[
                            {
                                value: backgroundColor.color,
                                onChange: setBackgroundColor,
                                label:  __('Background Color', 'mytheme-blocks')
                            },
                            {
                                value: textColor.color,
                                onChange: setTextColor,
                                label:  __('Text Color', 'mytheme-blocks')
                            }
                        ]}
                    > 
                        <ContrastChecker
                            textColor={textColor.color}
                            backgroundColor={backgroundColor.color}
                        />
                    </PanelColorSettings>
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
                    style={{ textAlign: alignment, backgroundColor: backgroundColor.color,
                        color: textColor.color }}
                />
                {/* return <p className={className}>Editor</p>; */}
            </>
        )
    }
}   
// look in the console when in editor and notice available "props" like setbackgroundColor and setTextColor
export default withColors('backgroundColor', {'textColor': 'color'}, )(Edit);