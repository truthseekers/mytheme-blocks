import { Component } from "@wordpress/element";
import { RichText, MediaPlaceholder } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from '@wordpress/blob';
import { Spinner } from "@wordpress/components";

class TeamMemberEdit extends Component {
    onChangeTitle = (title) => {
        this.props.setAttributes({title})
    }
    onChangeInfo = (info) => {
        this.props.setAttributes({info})
    }
    onSelectImage = ({ id, url, alt}) => {
        this.props.setAttributes({
            id, url, alt
        })
    }
    onSelectURL = (url => {
        this.props.setAttributes({
            url,
            id: null,
            alt: ""
        })
    })

    render() {
        const { className, attributes } = this.props;
        const { title, info, url, alt } = attributes;
        console.log("attributes below:");
        console.log(attributes);
        return (
            <div className={ className }>
                {url ?
                    <>
                        <img src={url} alt={alt} />
                        {isBlobURL(url) && <Spinner />}
                    </>
                    : <MediaPlaceholder
                        icon="format-image"
                        onSelect={ this.onSelectImage }
                        onSelectURL={ this.onSelectURL }//console.log(url)}
                        onError={(message) => console.log(message)}
                        accept="image/*"
                        allowedTypes={['image']}
                    />
                }
                <RichText
                    className={'wp-block-mytheme-blocks-team-member__title'}
                    tagName="h4"
                    onChange={ this.onChangeTitle }
                    value={title}
                    placeholder={__("Member Name", "mytheme-blocks")}
                    formattingControls={ [] }
                />
                <RichText
                    className={'wp-block-mytheme-blocks-team-member__info'}
                    tagName="p"
                    onChange={ this.onChangeInfo }
                    value={info}
                    placeholder={__("Member Info", "mytheme-blocks")}
                    formattingControls={ [] }
                />

            </div>
        )
    }
}

export default TeamMemberEdit;