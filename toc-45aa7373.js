// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html">Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="overview.html">Chapter Overview</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="builtins.html">List of Bevy Builtins</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorial.html"><strong aria-hidden="true">1.</strong> Bevy Tutorials</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorial/guide.html"><strong aria-hidden="true">1.1.</strong> Guided Tour</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cookbook.html"><strong aria-hidden="true">2.</strong> Bevy Cookbook</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cookbook/print-framerate.html"><strong aria-hidden="true">2.1.</strong> Show Framerate</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cookbook/cursor2world.html"><strong aria-hidden="true">2.2.</strong> Convert cursor to world coordinates</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cookbook/smooth-movement.html"><strong aria-hidden="true">2.3.</strong> Transform Interpolation/Extrapolation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cookbook/pan-orbit-camera.html"><strong aria-hidden="true">2.4.</strong> 3D Pan+Orbit Camera</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cookbook/custom-projection.html"><strong aria-hidden="true">2.5.</strong> Custom Camera Projection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cookbook/print-resources.html"><strong aria-hidden="true">2.6.</strong> List All Resource Types</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup.html"><strong aria-hidden="true">3.</strong> Bevy Setup Tips</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/getting-started.html"><strong aria-hidden="true">3.1.</strong> Getting Started</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/editor.html"><strong aria-hidden="true">3.2.</strong> Text Editor / IDE</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/editor/vscode.html"><strong aria-hidden="true">3.2.1.</strong> Visual Studio Code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/editor/jetbrains.html"><strong aria-hidden="true">3.2.2.</strong> JetBrains (RustRover, IntelliJ, CLion)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/editor/kak.html"><strong aria-hidden="true">3.2.3.</strong> Kakoune</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/editor/vim.html"><strong aria-hidden="true">3.2.4.</strong> Vim</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/editor/emacs.html"><strong aria-hidden="true">3.2.5.</strong> Emacs</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/bevy-config.html"><strong aria-hidden="true">3.3.</strong> Customizing Bevy (features, modularity)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/unofficial-plugins.html"><strong aria-hidden="true">3.4.</strong> Community Plugin Ecosystem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/bevy-tools.html"><strong aria-hidden="true">3.5.</strong> Dev Tools and Editors for Bevy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/perf.html"><strong aria-hidden="true">3.6.</strong> Performance Tunables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/bevy-git.html"><strong aria-hidden="true">3.7.</strong> Using bleeding-edge Bevy (main)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls.html"><strong aria-hidden="true">4.</strong> Common Pitfalls</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls/build-errors.html"><strong aria-hidden="true">4.1.</strong> Strange compile errors from Bevy or dependencies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls/performance.html"><strong aria-hidden="true">4.2.</strong> Slow Performance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls/into-system.html"><strong aria-hidden="true">4.3.</strong> Error adding function as system</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls/3d-not-rendering.html"><strong aria-hidden="true">4.4.</strong> 3D objects not displaying</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls/split-borrows.html"><strong aria-hidden="true">4.5.</strong> Borrow multiple fields from struct</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls/time.html"><strong aria-hidden="true">4.6.</strong> Jittering Time (choppy movement/animation)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pitfalls/uv-coordinates.html"><strong aria-hidden="true">4.7.</strong> Textures/Images are flipped</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals.html"><strong aria-hidden="true">5.</strong> Game Engine Fundamentals</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/coords.html"><strong aria-hidden="true">5.1.</strong> Coordinate System</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/transforms.html"><strong aria-hidden="true">5.2.</strong> Transforms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/visibility.html"><strong aria-hidden="true">5.3.</strong> Visibility</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/time.html"><strong aria-hidden="true">5.4.</strong> Time and Timers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/log.html"><strong aria-hidden="true">5.5.</strong> Logging, Console Messages</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/hierarchy.html"><strong aria-hidden="true">5.6.</strong> Parent/Child Hierarchies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/fixed-timestep.html"><strong aria-hidden="true">5.7.</strong> Fixed Timestep</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/async-compute.html"><strong aria-hidden="true">5.8.</strong> Background Computation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fundamentals/gizmos.html"><strong aria-hidden="true">5.9.</strong> Gizmos</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="graphics.html"><strong aria-hidden="true">6.</strong> General Graphics Features</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="graphics/camera.html"><strong aria-hidden="true">6.1.</strong> Cameras</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="graphics/hdr-tonemap.html"><strong aria-hidden="true">6.2.</strong> HDR and Tonemapping</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="graphics/bloom.html"><strong aria-hidden="true">6.3.</strong> Bloom</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2d.html"><strong aria-hidden="true">7.</strong> Working with 2D</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2d/camera.html"><strong aria-hidden="true">7.1.</strong> 2D Camera Setup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2d/sprites.html"><strong aria-hidden="true">7.2.</strong> Sprites and Atlases</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3d.html"><strong aria-hidden="true">8.</strong> Working with 3D</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3d/camera.html"><strong aria-hidden="true">8.1.</strong> 3D Camera Setup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3d/gltf.html"><strong aria-hidden="true">8.2.</strong> 3D Models and Scenes (GLTF)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input.html"><strong aria-hidden="true">9.</strong> Input Handling</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input/keyboard.html"><strong aria-hidden="true">9.1.</strong> Keyboard</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input/mouse.html"><strong aria-hidden="true">9.2.</strong> Mouse</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input/gamepad.html"><strong aria-hidden="true">9.3.</strong> Gamepad (Controller, Joystick)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input/touch.html"><strong aria-hidden="true">9.4.</strong> Touchscreen</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input/gesture.html"><strong aria-hidden="true">9.5.</strong> Gestures</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input/dnd.html"><strong aria-hidden="true">9.6.</strong> Drag-and-Drop (Files)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="input/ime.html"><strong aria-hidden="true">9.7.</strong> IME (Advanced Text)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="window.html"><strong aria-hidden="true">10.</strong> Window Management</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="window/props.html"><strong aria-hidden="true">10.1.</strong> Window Properties</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="window/clear-color.html"><strong aria-hidden="true">10.2.</strong> Change the Background Color</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="window/mouse-grab.html"><strong aria-hidden="true">10.3.</strong> Grab/Capture the Mouse Cursor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="window/icon.html"><strong aria-hidden="true">10.4.</strong> Set the Window Icon</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets.html"><strong aria-hidden="true">11.</strong> Asset Management</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets/handles.html"><strong aria-hidden="true">11.1.</strong> Handles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets/assetserver.html"><strong aria-hidden="true">11.2.</strong> Load Assets from Files</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets/data.html"><strong aria-hidden="true">11.3.</strong> Access the Asset Data</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets/assetevent.html"><strong aria-hidden="true">11.4.</strong> React to Changes with Asset Events</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets/ready.html"><strong aria-hidden="true">11.5.</strong> Track Loading Progress</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets/hot-reload.html"><strong aria-hidden="true">11.6.</strong> Hot-Reloading Assets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assets/processing.html"><strong aria-hidden="true">11.7.</strong> Processing Assets</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audio.html"><strong aria-hidden="true">12.</strong> Audio</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audio/basic.html"><strong aria-hidden="true">12.1.</strong> Playing Sounds</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audio/spatial.html"><strong aria-hidden="true">12.2.</strong> Spatial Audio</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audio/custom.html"><strong aria-hidden="true">12.3.</strong> Custom Audio Streams</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ui.html"><strong aria-hidden="true">13.</strong> Bevy UI Framework</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming.html"><strong aria-hidden="true">14.</strong> Bevy Core Programming Framework</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/ecs-intro.html"><strong aria-hidden="true">14.1.</strong> Intro to ECS</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/intro-data.html"><strong aria-hidden="true">14.2.</strong> Intro: Your Data</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/intro-code.html"><strong aria-hidden="true">14.3.</strong> Intro: Your Code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/app-builder.html"><strong aria-hidden="true">14.4.</strong> The App</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/systems.html"><strong aria-hidden="true">14.5.</strong> Systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/res.html"><strong aria-hidden="true">14.6.</strong> Resources</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/ec.html"><strong aria-hidden="true">14.7.</strong> Entities, Components</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/bundle.html"><strong aria-hidden="true">14.8.</strong> Bundles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/queries.html"><strong aria-hidden="true">14.9.</strong> Queries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/commands.html"><strong aria-hidden="true">14.10.</strong> Commands</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/events.html"><strong aria-hidden="true">14.11.</strong> Events</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/plugins.html"><strong aria-hidden="true">14.12.</strong> Plugins</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/local.html"><strong aria-hidden="true">14.13.</strong> Local Resources</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/exclusive.html"><strong aria-hidden="true">14.14.</strong> Exclusive Systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/world.html"><strong aria-hidden="true">14.15.</strong> Direct ECS World Access</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/schedules.html"><strong aria-hidden="true">14.16.</strong> Schedules</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/system-order.html"><strong aria-hidden="true">14.17.</strong> System Order of Execution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/run-conditions.html"><strong aria-hidden="true">14.18.</strong> Run Conditions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/system-sets.html"><strong aria-hidden="true">14.19.</strong> System Sets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/states.html"><strong aria-hidden="true">14.20.</strong> States</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/change-detection.html"><strong aria-hidden="true">14.21.</strong> Change Detection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/one-shot-systems.html"><strong aria-hidden="true">14.22.</strong> One-Shot Systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/par-iter.html"><strong aria-hidden="true">14.23.</strong> Internal Parallelism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/system-piping.html"><strong aria-hidden="true">14.24.</strong> System Piping</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/paramset.html"><strong aria-hidden="true">14.25.</strong> ParamSet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="programming/non-send.html"><strong aria-hidden="true">14.26.</strong> Non-Send</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="patterns.html"><strong aria-hidden="true">15.</strong> Programming Patterns</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="patterns/generic-systems.html"><strong aria-hidden="true">15.1.</strong> Generic Systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="patterns/component-storage.html"><strong aria-hidden="true">15.2.</strong> Component Storage (Table/Sparse-Set)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="patterns/manual-event-clear.html"><strong aria-hidden="true">15.3.</strong> Manual Event Clearing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="patterns/system-tests.html"><strong aria-hidden="true">15.4.</strong> Writing Tests for Systems</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="gpu.html"><strong aria-hidden="true">16.</strong> Bevy Render (GPU) Framework</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="gpu/intro.html"><strong aria-hidden="true">16.1.</strong> Render Architecture Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="gpu/stages.html"><strong aria-hidden="true">16.2.</strong> Render Stages</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms.html"><strong aria-hidden="true">17.</strong> Bevy on Different Platforms</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/linux.html"><strong aria-hidden="true">17.1.</strong> Linux Desktop</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/macos.html"><strong aria-hidden="true">17.2.</strong> macOS Desktop</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/windows.html"><strong aria-hidden="true">17.3.</strong> Windows Desktop</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/windows/wsl2.html"><strong aria-hidden="true">17.3.1.</strong> Working in WSL2</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/wasm.html"><strong aria-hidden="true">17.4.</strong> Browser (WebAssembly)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/wasm/size-opt.html"><strong aria-hidden="true">17.4.1.</strong> Optimize for Size</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/wasm/webpage.html"><strong aria-hidden="true">17.4.2.</strong> Create a Custom Web Page</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platforms/wasm/gh-pages.html"><strong aria-hidden="true">17.4.3.</strong> Hosting on GitHub Pages</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/cross.html"><strong aria-hidden="true">17.5.</strong> Cross-Compilation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/cross/linux-windows.html"><strong aria-hidden="true">17.5.1.</strong> From Linux to Windows</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="setup/cross/macos-windows.html"><strong aria-hidden="true">17.5.2.</strong> From macOS to Windows</a></span></li></ol></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credits.html">Credits</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="contact.html">Contact Me</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="contributing-bevy.html">Contribute to Bevy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="contributing.html">Contribute to this Book</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        const sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

