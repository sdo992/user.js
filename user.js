/***
    references used in part:
        ghacks: https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js
        pyllyukko: https://github.com/pyllyukko/user.js/
		arkenfox: https://github.com/arkenfox/user.js
		Ryan Daniels: https://gist.github.com/ryandaniels/33e443bb401dde665fce15dd2a3959b6
        Mozilla privacy tweaks: https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks
        Mozilla disable automatic connections: https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
        Spyware: https://spyware.neocities.org/guides/firefox.html
		RestorePrivacy: https://restoreprivacy.com/firefox-privacy/
        
    Check out browser security: https://browserleaks.com/
    
    Sane user.js
***/

// Basic browser Settings
user_pref("browser.aboutHomeSnippets.updateUrl", ""); //Disable downloading homepage snippets/messages from Mozilla, auto-connects to Mozilla
user_pref("browser.cache.disk.enable", false); // No disk cache, http://kb.mozillazine.org/Browser.cache.disk.enable
user_pref("browser.cache.memory.enable", true); // Enable memory cache, http://kb.mozillazine.org/Browser.cache.memory.enable
user_pref("browser.cache.offline.enable", false); // Disable offline cache
user_pref("browser.cache.disk_cache_ssl", false); // Don't cache SSL pages, http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.casting.enabled", false); // Part of the UPnP protocol: SSDP disabled
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.display.use_document_fonts", 0); // Prevent font fingerprint
user_pref("browser.download.folderList", 2); // 0 = Desktop, 1 = Downloads folder, 2 = Use most recent
user_pref("browser.download.manager.addToRecentDocs", false); // Windows only: Disable adding to RecentDocs
user_pref("browser.download.manager.retention", 0);
user_pref("browser.download.useDownloadDir", false); // Prompt for download folder
user_pref("browser.fixup.alternate.enabled", false); // Do not try to guess domain names
user_pref("browser.fixup.hide_user_pass", true);
user_pref("browser.formfill.enable", false); // Don't autofill
user_pref("browser.newtab.preload", false); // same
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); \\ Fuck telemetry
user_pref("browser.newtabpage.activity-stream.telemetry", false); \\ Fuck telemetry
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", ""); \\ Fuck telemetry
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false); // No activity on New Tab
user_pref("browser.newtabpage.enhanced", false); // Unable to determine if this is still valid
user_pref("browser.newtab.preload", false); // Quit talking when I don't want you to talk!
user_pref("browser.offline-apps.notify", true); // Notify when sites offer offline storage
user_pref("browser.safebrowsing.malware.enabled", false); // Begin [Disable Safebrowsing] Don't send sites to Mozilla or Google
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");// End [Disable Safebrowsing]
user_pref("browser.search.geoip.url", ""); // Location Service site URL blanked
user_pref("browser.search.region", "US"); // US as default location
user_pref("browser.search.suggest.enabled", false); //Disable search suggestions in the search bar
user_pref("browser.search.update", false); // Don't update search engines automatically
user_pref("browser.selfsupport.url", ""); // Don't send a heartbeat ping
user_pref("browser.send_pings", false); // "The attribute would be useful for letting websites track visitors’ clicks. " https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks
user_pref("browser.sessionstore.max_tabs_undo", 0); Disable temporary list of recently closed tabs 
user_pref("browser.shell.checkDefaultBrowser", false); // Don't check & shut up
user_pref("browser.startup.homepage", "about:blank"); //Blank start page
user_pref("browser.tabs.crashReporting.sendReport", false); // Don't send crash report
user_pref("browser.uitour.enabled", false); // Disable tour
user_pref("browser.urlbar.autocomplete.enabled", false); // Kind of like prefetch
user_pref("browser.urlbar.autoFill", false); // Don't autofill in the URL bar
user_pref("browser.urlbar.autoFill.typed", false); // Ditto
user_pref("browser.urlbar.filter.javascript", true); // Do not let the URL bar display JS in history
user_pref("browser.urlbar.speculativeConnect.enabled", false); // Disable preloading of autocomplete URLs https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks
user_pref("browser.urlbar.suggest.searches",false); // Don't suggest anything
user_pref("browser.urlbar.suggest.history", false); // Don't keep history of suggestions
user_pref("browser.urlbar.trimURLS", false); // Do not trim HTTP off URLs in the address bar

// Dev Tools
user_pref("devtools.chrome.enabled", false); // Disable dev tools in browser
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false); // Disable WebIDE and remote debugging, see: https://trac.torproject.org/projects/tor/ticket/16222
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);

// DOM settings
user_pref("dom.allow_cut_copy", false); // Don't write to clipboard
user_pref("dom.battery.enabled", false); // Don't let sites check battery status
user_pref("dom.enable_performance", false); // See for security concerns: https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.clipboardevents.enabled",  false); // Don't let sites know what you click
user_pref("dom.flyweb.enabled", false); // Just...no; for a good breakdown see: https://www.ghacks.net/2016/07/26/firefox-flyweb/
user_pref("dom.gamepad.enabled", false); // If you don't game on the browser, enable if you do
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); // Disable Flash Player crash reports
user_pref("dom.ipc.plugins.reportCrashURL", false); // Don't report URL of crash
user_pref("dom.maxHardwareConcurrency", 2); // Pretend to be a dual-core CPU
user_pref("dom.netinfo.enabled", false); // See: https://wicg.github.io/netinfo/#privacy-considerations
user_pref("dom.network.enabled", false); // See: // https://www.torproject.org/projects/torbrowser/design/#fingerprinting-defenses
//user_pref("dom.push.enabled", false);
//user_pref("dom.push.connection.enabled", false);
//user_pref("dom.push.serverURL", "");
//user_pref("dom.push.userAgentID", "");
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.vr.enabled", false); // 
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.workers.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.telephony.enabled", false); // https://wiki.mozilla.org/WebAPI/Security/WebTelephony

// GEO-location
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", " ");
user_pref("geo.wifi.logging.enabled", false);

// Media settings
user_pref("media.getusermedia.screensharing.enabled", false); // Don't allow sites to screenshare
user_pref("media.getusermedia.audiocapture.enabled", false); // Breaks audio capture, some sites may need for functionality
user_pref("media.gmp-gmpopenh264.enabled", false); // Disable automatic downloading of OpenH264 codec
user_pref("media.gmp-manager.url", ""); // Same as above
user_pref("media.navigator.enabled", false); // Sites cannot access media devices
user_pref("media.navigator.video.enabled", false); // No access to video devices
user_pref("media.webspeech.synth.enabled", false); // No webspeech synthesis
user_pref("media.webspeech.recognition.enable", false); // No webspeech recognition
user_pref("media.peerconnection.enabled", false); // Disable WebRTC completely, see: https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.peerconnection.ice.no_host", true); // See: https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.video_stats.enabled",  false); // Don't allow sites to get video playback statistics

// Network settings
user_pref("network.captive-portal-service.enabled", false); // Disable automatic captive portal detection, see: https://support.mozilla.org/en-US/questions/1157121
user_pref("network.connectivity-service.enabled", false); // Don't check my connection status, see: https://bugzilla.mozilla.org/1460537
user_pref("network.cookie.cookieBehavior", 1); // 0 = accept all; 1 = block 3rd party; 2 = block all; 3 = Block from unvisited; 4 = New Cookie Jar Policy; see: https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks
user_pref("network.cookie.lifetimePolicy", 2); // 0 = accept normally; 1 = prompt for each; 2 = current session only; 3 accept for 'N' days, see: https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks
user_pref("network.dns.disablePrefetch", true); // Disable DNS prefetch
user_pref("network.dns.disablePrefetchFromHTTPS", true); // As above, with HTTPS
user_pref("network.http.use-cache", true); // Needed to use memory cache, see line 12
user_pref("network.IDN_show_punycode", true); // Show actual code for international characters, see: http://kb.mozillazine.org/Network.IDN_show_punycode
user_pref("network.jar.open-unsafe-types",  false); // Don't open unsafe Java JAR files
user_pref("network.predictor.enabled", false); // Disable predictive service
user_pref("network.prefetch-next", false); // Don't prefetch links
user_pref("network.proxy.socks_remote_dns", true); // Use SOCKS for DNS when active
user_pref("network.manage-offline-status",  false); // Keep your paws off my connection state
user_pref("network.http.speculative-parallel-limit", 0); // Completely disable speculative pre-connections

// Miscellaneous
user_pref("app.normandy.enabled", false); // Fuck telemetry pings
user_pref("app.normandy.api_url", ""); // Explicitly set URL to nothing for telemetry
user_pref("app.shield.optoutstudies.enabled", false); // Opt-out of studies, no effect if Health Reports are disabled
user_pref("beacon.enabled", false); // See: https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("breakpad.reportURL", ""); // Don't report URL when things break
user_pref("clipboard.autocopy", false); // Linux only: Don't send items to clipboard
user_pref("device.sensors.enabled", false); // Disable the sensor API, see: https://wiki.mozilla.org/Sensor_API
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.url", "");
user_pref("extensions.pocket.enabled", false); // Fuck pocket
user_pref("gfx.font_rendering.opentype_svg.enabled", false); // Disable SVG in OpenType fonts, see: https://wiki.mozilla.org/SVGOpenTypeFonts
user_pref("javascript.options.asmjs",   false); // Disable asm.js, see: http://asmjs.org/
user_pref("keyword.enabled", false); // Don't leak typed information to default search engine
user_pref("layout.css.visited_links_enabled", false); // Don't allow :visited links to be set in CSS
user_pref("lightweightThemes.update.enabled", false); // Opt-out of themes updates
user_pref("middlemouse.contentLoadURL", false); // Disabled by default => 57, see: https://trac.torproject.org/projects/tor/ticket/10089
user_pref("places.history.enabled", false); // Don't remember the places you've gone

// Privacy settings
user_pref("privacy.clearOnShutdown.cache", true); // What it says
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.cpd.offlineApps", true); // Clear everything but 'Site Preferences'
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // Block cryptominers
user_pref("privacy.firstparty.isolate", true); // Enable first-party isolation, see: https://wiki.mozilla.org/Security/FirstPartyIsolation
user_pref("privacy.resistFingerprinting", false); // Either-or; breaks some sites
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.timeSpan", 0); // Clear everything in Recent History

// Security
user_pref("security.ask_for_password", 2); // 0 = first time only (default); 1 = every time; 2 = ask in 'N' minutes
user_pref("security.insecure_field_warning.contextual.enabled", true); // Warn if login is insecure (i.e., no SSL)
user_pref("security.mixed_content.block_active_content", true); //  Enforce mixed active content blocking
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.password_lifetime", 20); // Default = 30 minutes; change to suit your needs
user_pref("security.ssl.errorReporting.automatic", false); // Don't report SSL errors
user_pref("security.ssl.errorReporting.enabled", false); // Don't report SSL errors
user_pref("security.ssl.errorReporting.url", "");

// Services
user_pref("services.blocklist.update_enabled", false);
user_pref("services.blocklist.onecrl.collection", "");
user_pref("services.blocklist.addons.collection", "");
user_pref("services.blocklist.plugins.collection", "");
user_pref("services.blocklist.gfx.collection", "");

// Signon Settings
user_pref("signon.autofillForms", false); // Manually enter your own information, see: https://2019.www.torproject.org/projects/torbrowser/design/#identifier-linkability
user_pref("signon.formlessCapture.enabled", false); // Disable formless login capture

// Telemetry
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.unified", false); // if FALSE, then .enabled controls; if TRUE, then .enabled controls extended data set
user_pref("toolkit.telemetry.enabled", false); // Locked by default; set to FALSE with line 138 set to FALSE as well
user_pref("toolkit.telemetry.server", "data:,"); 
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.hybridContent.enabled", false)
user_pref("toolkit.telemetry.coverage.opt-out", true); // According to ghacks it is a [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // According to ghacks it is a [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");

// WebGL
user_pref("webgl.disabled", true);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.enable-debug-renderer-info",   false);

// Personal preferences
user_pref("print.print_headercenter", "");
user_pref("print.print_headerleft", "");
user_pref("print.print_headerright", "");
user_pref("print.print_footercenter", "");
user_pref("print.print_footerleft", "");
user_pref("print.print_footerright", "");