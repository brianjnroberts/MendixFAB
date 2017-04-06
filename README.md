![badge](https://img.shields.io/badge/mendix-5.19.0-green.svg)

# Fixed Action Button (FAB)

Add an Android-style FAB to your app.
📱 works on mobile!

### Installation

1. Install the widget in your project
2. Include the widget in a context wrapper (i.e. Data Grid) on a page
3. Configure the widget's settings:
    1. On the **General** tab, Configure:
        1. `Base Button Color` : set to the CSS color for the base button
        2. `Base Button Class` : set to the class for the icon on the base button. 
            - use `glyphicon glyphicon-{something}` for glyphicons
            - use `fa fa-{something}` for fontawesome (must be included in project)
        3. `Actions`: For each action, configure:
            1. `ClassName`: set to the class for the icon on the action button
            2. `Color`: set to the color for the action button
            3. `MF Action`: select the microflow for the action button
            4. `Label`: set to the floating label for the action button
    

### Typical usage scenario

Useful to show multiple contextual actions without taking up a lot of space on the screen.

### Known Limitations

none

###### Based on the Mendix Widget Boilerplate

See [AppStoreWidgetBoilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate/) for an example