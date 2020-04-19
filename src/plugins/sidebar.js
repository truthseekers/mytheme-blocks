import { registerPlugin } from "@wordpress/plugins";
import {
    PluginSidebar, PluginSidebarMoreMenuItem, PluginPostStatusInfo,
    PluginPrePublishPanel, PluginPostPublishPanel, PluginBlockSettingsMenuItem,
    PluginMoreMenuItem
} from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";

let PluginMetaFields = (props) => {
    return (
        <>
            <PanelBody
                title={__("Meta Fields Panel", "mytheme-blocks")}
                icon="admin-post"
                initialOpen={true}
            >
                <TextControl
                    value={props.subtitle}
                    label={__("Post Subtitle", "mytheme-blocks")}
                    onChange={(value) => props.onSubtitleChange(value)}
                />
            </PanelBody>
        </>
    )
}

PluginMetaFields = compose([
    withSelect(
        (select) => {
            return {
                subtitle: select('core/editor').getEditedPostAttribute('meta')['_mytheme_blocks_post_subtitle']
            }
        }
    ),
    withDispatch(
        (dispatch) => {
            return {
                onSubtitleChange: (subtitle) => {
                    dispatch('core/editor').editPost({ meta: { _mytheme_blocks_post_subtitle: subtitle } })
                }
            }
        }
    )
])(PluginMetaFields);


registerPlugin('mytheme-blocks-sidebar', {
    icon: 'smiley',
    render: () => {
        return (
            <>
                <PluginSidebarMoreMenuItem target="mytheme-blocks-sidebar">
                    {__('meta Options', 'mytheme-blocks')}
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name="mytheme-blocks-sidebar"
                    icon="admin-post"
                    title={__('Meta Options', 'mytheme-blocks')}
                >

                    <PluginMetaFields />

                </PluginSidebar>

                <PluginPostStatusInfo>
                    asldkjadsf ja ja ja
                </PluginPostStatusInfo>
                <PluginPrePublishPanel
                    title="wefwef"
                    initialOpen={true}
                >
                    pre publish
                </PluginPrePublishPanel>
                <PluginPostPublishPanel
                    title="wefwef"
                    initialOpen={true}
                >
                    Post publish
                </PluginPostPublishPanel>

                <PluginBlockSettingsMenuItem
                    icon="twitter"
                    label="block stuff"
                    onClick={() => alert(true)}
                />
                <PluginMoreMenuItem
                    icon="twitter"
                    onClick={() => alert(true)}
                >
                    omre menu item
                </PluginMoreMenuItem>
            </>
        );
    }
});
