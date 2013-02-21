North London Literature Festival (Mobile App)
=======

Webapp based on HTML/JS/CSS in iOS App wrapper. Android wrapper planned.

**Built in features:**
- Warning when Internet connection isn't available
- Content and structure updates
- Google maps show specified markers and their meta data and also if wanted and supported the devices location as a blue circle
- Open links with extOpen=true query parameter in default browser (some code in the iOS files were required for that. Don't know if Android needs a similar adaptation)

**Unfinished feaures/platforms:** 
- RSS aggregation
- Content for first submission isn't ready and added yet
- Design isn't ready and applied yet
- iOS app icons and launch images aren't included yet
- Android optimization of HTML/JS/CSS
- Android wrapper


**Update mechanism in generall**
Find file examples in _update_ directory.

Hardcoded remote update URL still has to be defined!

_contentDate.js_ will be polled repeatedly. If date differs to current date or force is true, _content.js_ will be loaded. _content.js_ includes the content itself AND the functions to parse the content (templates). After receiving _content.js_ the app executes its parse function. Like this entirely new templates etc. are possible.
_content.js_ will be saved completely into JSs localStorage, so its filesize mustn't be over 5MB (browser limit) including base64 embedded images (the only way to update images or maybe sounds too!).


**How to perform an update**
- Perform the following changes locally and test them with a device
- Edit the content in _content.js_ and if needed its templates (touch them only if you know what you are doing)
- Edit _contentDate.js_ accordingly
- Test locally with a device
- If everthing is as expected upload to the remote update URL


**Connected accounts**
- google maps api: middlesexunict@gmail.com