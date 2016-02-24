#Black & Red Inc. Frontend-Candidate-lab
### Anthony Chavez
=====================

## TOC
<!-- MarkdownTOC -->

- [Serving Files Locally](#serving-files-locally)
- [Notes](#notes)

<!-- /MarkdownTOC -->


## Serving Files Locally


``` npm install; bower install; gulp; gulp serve; ```

OR just

```gulp serve``` (which will also start a watch task)


## Notes

* I took some liberty with the layout for "responsivity", there are aspect ratios that could definitely be improved upon.
* The Polaroids could easily be lightened and abstracted by getting a good BG texture of those images, then just translating them around.  Probably more overhead to pull in those 4 fonts than to just accept the 3 PNGs though...
* There are a few proportions aspect ratios that could probably still use some work, would probably start working on target devices moving forward from here.  Serving up on localhost makes it easy to point at my dev machine's IP from any device and then use Edge Inspect/Weinre to debug the actual computed DOM on the device...
* Was missing the fonts, otherwise I would have refined text styling in the "Stop by a minute section"
* A ```gulp build``` task could be easily dropped in here to concat, minify, gzip, rev/cache-bust, manifest, etc... all the assets into a /dist or /build directory.