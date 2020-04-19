import { registerPlugin } from "@wordpress/plugins";
import {
    PluginSidebar, PluginSidebarMoreMenuItem, PluginPostStatusInfo,
    PluginPrePublishPanel, PluginPostPublishPanel, PluginBlockSettingsMenuItem,
    PluginMoreMenuItem
} from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";

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
                    alkjasdf
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
