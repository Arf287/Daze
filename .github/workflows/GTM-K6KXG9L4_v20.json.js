{
    "exportFormatVersion": 2,
    "exportTime": "2023-11-17 11:18:11",
    "containerVersion": {
        "path": "accounts/6205250641/containers/170904202/versions/20",
        "accountId": "6205250641",
        "containerId": "170904202",
        "containerVersionId": "20",
        "name": "9",
        "description": "9",
        "container": {
            "path": "accounts/6205250641/containers/170904202",
            "accountId": "6205250641",
            "containerId": "170904202",
            "name": "www.dakorner-store.com",
            "publicId": "GTM-K6KXG9L4",
            "usageContext": [
                "WEB"
            ],
            "fingerprint": "1700023553691",
            "tagManagerUrl": "https://tagmanager.google.com/#/container/accounts/6205250641/containers/170904202/workspaces?apiLink=container",
            "features": {
                "supportUserPermissions": true,
                "supportEnvironments": true,
                "supportWorkspaces": true,
                "supportGtagConfigs": false,
                "supportBuiltInVariables": true,
                "supportClients": false,
                "supportFolders": true,
                "supportTags": true,
                "supportTemplates": true,
                "supportTriggers": true,
                "supportVariables": true,
                "supportVersions": true,
                "supportZones": true,
                "supportTransformations": false
            },
            "tagIds": [
                "GTM-K6KXG9L4"
            ]
        },
        "tag": [
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "tagId": "8",
                "name": "Elves secret",
                "type": "gclidw",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "enableCrossDomain",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "path",
                        "value": "{{Winter land 3}}"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableUrlPassthrough",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "cookieFlags",
                        "value": "{{Winter land 3}}"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "acceptIncoming",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "linkerDomains",
                        "value": "dakorner-store.com{{Event}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "domain",
                        "value": "dakorner-store.com"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "formDecoration",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "urlPosition",
                        "value": "fragment"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableCookieOverrides",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "cookiePrefix",
                        "value": "dakornerstore"
                    }
                ],
                "fingerprint": "1700194341988",
                "firingTriggerId": [
                    "2147479553"
                ],
                "parentFolderId": "11",
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "tagId": "9",
                "name": "Rudolf",
                "type": "sp",
                "scheduleStartMs": 1700024400000,
                "scheduleEndMs": 1703480340000,
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "enableConversionLinker",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableDynamicRemarketing",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "conversionCookiePrefix",
                        "value": "_gcl"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "conversionId",
                        "value": "{{Winter land 3}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "customParamsFormat",
                        "value": "NONE"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "conversionLabel",
                        "value": "{{Page URL}}"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "rdp",
                        "value": "false"
                    }
                ],
                "fingerprint": "1700194341986",
                "firingTriggerId": [
                    "2147479573",
                    "2147479553",
                    "2147479572",
                    "6",
                    "7"
                ],
                "parentFolderId": "11",
                "tagFiringOption": "UNLIMITED",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "monitoringMetadataTagNameKey": "Tag",
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "tagId": "21",
                "name": "Google Tag",
                "type": "googtag",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "tagId",
                        "value": "{{Video Status}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "configSettingsVariable",
                        "value": "{{Winter land 3}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventSettingsVariable",
                        "value": "{{Google Tag Event Settings}}"
                    }
                ],
                "fingerprint": "1700199240883",
                "firingTriggerId": [
                    "2147479553",
                    "17",
                    "2147479572",
                    "15",
                    "12",
                    "2147479573",
                    "14",
                    "18",
                    "16",
                    "13",
                    "6",
                    "7"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            }
        ],
        "trigger": [
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "6",
                "name": "Winter land",
                "type": "CLICK",
                "fingerprint": "1700194341984",
                "parentFolderId": "11"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "7",
                "name": "Winter land 3",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "MATCH_REGEX",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "Sales"
                            }
                        ]
                    }
                ],
                "fingerprint": "1700194341987",
                "parentFolderId": "11"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "12",
                "name": "Greener",
                "type": "CONSENT_INIT",
                "fingerprint": "1700195008081"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "13",
                "name": "Window Loaded",
                "type": "WINDOW_LOADED",
                "fingerprint": "1700195062819"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "14",
                "name": "Just Links",
                "type": "LINK_CLICK",
                "autoEventFilter": [
                    {
                        "type": "ENDS_WITH",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Click Classes}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "O"
                            }
                        ]
                    }
                ],
                "waitForTags": {
                    "type": "BOOLEAN",
                    "value": "true"
                },
                "checkValidation": {
                    "type": "BOOLEAN",
                    "value": "true"
                },
                "waitForTagsTimeout": {
                    "type": "TEMPLATE",
                    "value": "2000"
                },
                "uniqueTriggerId": {
                    "type": "TEMPLATE"
                },
                "fingerprint": "1700195108534"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "15",
                "name": "Custom Event",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "Trees"
                            }
                        ]
                    }
                ],
                "fingerprint": "1700195142300"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "16",
                "name": "Trigger Group",
                "type": "TRIGGER_GROUP",
                "fingerprint": "1700195204431",
                "parameter": [
                    {
                        "type": "LIST",
                        "key": "triggerIds",
                        "list": [
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "2147479553"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "2147479572"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "15"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "12"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "2147479573"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "14"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "13"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "6"
                            },
                            {
                                "type": "TRIGGER_REFERENCE",
                                "value": "7"
                            }
                        ]
                    }
                ]
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "17",
                "name": "Consent Initialization",
                "type": "CONSENT_INIT",
                "fingerprint": "1700195690060"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "triggerId": "18",
                "name": "Pa",
                "type": "PAGEVIEW",
                "fingerprint": "1700195721075"
            }
        ],
        "variable": [
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "variableId": "4",
                "name": "Winter land",
                "type": "gtcs",
                "parameter": [
                    {
                        "type": "LIST",
                        "key": "configSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Referrer}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Event}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Event}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Page Hostname}}"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "fingerprint": "1700194341989",
                "parentFolderId": "11"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "variableId": "5",
                "name": "Winter land 3",
                "type": "gtcs",
                "parameter": [
                    {
                        "type": "LIST",
                        "key": "configSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Event}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Event}}"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "fingerprint": "1700194341990",
                "parentFolderId": "11"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "variableId": "20",
                "name": "Google Tag Event Settings",
                "type": "gtes",
                "parameter": [
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Video Visible}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Click URL}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{History Source}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Form Element}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Click Text}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Event}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Click Element}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Click Text}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Click Classes}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Winter land 3}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Winter land}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Winter land}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Click Text}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Old History State}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "{{Old History State}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Winter land}}"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "LIST",
                        "key": "userProperties",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "name",
                                        "value": "{{Winter land}}"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "{{Winter land}}"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "fingerprint": "1700199198390"
            }
        ],
        "folder": [
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "folderId": "11",
                "name": "Winterwonderland",
                "fingerprint": "1700194341269"
            }
        ],
        "builtInVariable": [
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "PAGE_URL",
                "name": "Page URL"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "PAGE_HOSTNAME",
                "name": "Page Hostname"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "PAGE_PATH",
                "name": "Page Path"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "REFERRER",
                "name": "Referrer"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "EVENT",
                "name": "Event"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CLICK_ELEMENT",
                "name": "Click Element"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CLICK_CLASSES",
                "name": "Click Classes"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CLICK_ID",
                "name": "Click ID"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CLICK_TARGET",
                "name": "Click Target"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CLICK_URL",
                "name": "Click URL"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CLICK_TEXT",
                "name": "Click Text"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "FORM_ELEMENT",
                "name": "Form Element"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "NEW_HISTORY_FRAGMENT",
                "name": "New History Fragment"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "OLD_HISTORY_FRAGMENT",
                "name": "Old History Fragment"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "NEW_HISTORY_STATE",
                "name": "New History State"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "OLD_HISTORY_STATE",
                "name": "Old History State"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "HISTORY_SOURCE",
                "name": "History Source"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CONTAINER_VERSION",
                "name": "Container Version"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "RANDOM_NUMBER",
                "name": "Random Number"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "CONTAINER_ID",
                "name": "Container ID"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "HTML_ID",
                "name": "HTML ID"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "ENVIRONMENT_NAME",
                "name": "Environment Name"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_PROVIDER",
                "name": "Video Provider"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_URL",
                "name": "Video URL"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_TITLE",
                "name": "Video Title"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_DURATION",
                "name": "Video Duration"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_PERCENT",
                "name": "Video Percent"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_VISIBLE",
                "name": "Video Visible"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_STATUS",
                "name": "Video Status"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "VIDEO_CURRENT_TIME",
                "name": "Video Current Time"
            },
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "type": "ELEMENT_VISIBILITY_RATIO",
                "name": "Percent Visible"
            }
        ],
        "fingerprint": "1700201622468",
        "tagManagerUrl": "https://tagmanager.google.com/#/versions/accounts/6205250641/containers/170904202/versions/20?apiLink=version",
        "customTemplate": [
            {
                "accountId": "6205250641",
                "containerId": "170904202",
                "templateId": "10",
                "name": "consentmanager.net CMP & Cookie Banner",
                "fingerprint": "1700099423468",
                "templateData": "___TERMS_OF_SERVICE___\n\nBy creating or modifying this file you agree to Google Tag Manager's Community\nTemplate Gallery Developer Terms of Service available at\nhttps://developers.google.com/tag-manager/gallery-tos (or such other URL as\nGoogle may provide), as modified from time to time.\n\n\n___INFO___\n\n{\n  \"type\": \"TAG\",\n  \"id\": \"cvt_temp_public_id\",\n  \"version\": 1,\n  \"securityGroups\": [],\n  \"displayName\": \"consentmanager.net CMP \\u0026 Cookie Banner\",\n  \"brand\": {\n    \"id\": \"github.com_consentmanager\",\n    \"displayName\": \"consentmanager\",\n    \"thumbnail\": \"data:image/png;base64,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\\u003d\\u003d\"\n  },\n  \"description\": \"The consentmanager.net CMP (Consent Management Provider) allows your to easily collect consent form your websites visitors in order to become GDPR and CCPA compliant.\",\n  \"containerContexts\": [\n    \"WEB\"\n  ]\n}\n\n\n___TEMPLATE_PARAMETERS___\n\n[\n  {\n    \"type\": \"TEXT\",\n    \"name\": \"consentmanager_id\",\n    \"displayName\": \"Consentmanager.net ID\",\n    \"simpleValueType\": true,\n    \"help\": \"Get your consentmanager.net ID at https://www.consentmanager.net/client/codes.php and insert the ID\",\n    \"notSetText\": \"Please enter your \\u0027Consentmanager ID\\u0027 found in your Account at consentmanager.net.\",\n    \"valueValidators\": [\n      {\n        \"type\": \"NON_EMPTY\"\n      }\n    ]\n  },\n  {\n    \"type\": \"TEXT\",\n    \"name\": \"consentmanager_host\",\n    \"displayName\": \"Consentmanager.net Host\",\n    \"simpleValueType\": true,\n    \"help\": \"Get your consentmanager.net Host at https://www.consentmanager.net/client/codes.php and insert the Host\",\n    \"notSetText\": \"Please enter your \\u0027Consentmanager Host\\u0027 found in your Account at consentmanager.net.\",\n    \"valueValidators\": [\n      {\n        \"type\": \"NON_EMPTY\"\n      }\n    ]\n  },\n  {\n    \"type\": \"TEXT\",\n    \"name\": \"consentmanager_cdn\",\n    \"displayName\": \"Consentmanager.net CDN\",\n    \"simpleValueType\": true,\n    \"help\": \"Get your consentmanager.net CDN at https://www.consentmanager.net/client/codes.php and insert the Host\",\n    \"notSetText\": \"Please enter your \\u0027Consentmanager CDN\\u0027 found in your Account at consentmanager.net.\",\n    \"valueValidators\": [\n      {\n        \"type\": \"NON_EMPTY\"\n      }\n    ]\n  },\n  {\n    \"type\": \"CHECKBOX\",\n    \"name\": \"google_consent_mode\",\n    \"checkboxText\": \"Google Consent Mode\",\n    \"simpleValueType\": true,\n    \"defaultValue\": false,\n    \"alwaysInSummary\": true\n  },\n  {\n    \"type\": \"LABEL\",\n    \"name\": \"label1\",\n    \"displayName\": \"Consent mode defaults\",\n    \"alwaysInSummary\": true\n  },\n  {\n    \"type\": \"CHECKBOX\",\n    \"name\": \"consent_analytics\",\n    \"checkboxText\": \"Allow Analytics Cookies\",\n    \"simpleValueType\": true,\n    \"defaultValue\": false,\n    \"alwaysInSummary\": true\n  },\n  {\n    \"type\": \"CHECKBOX\",\n    \"name\": \"consent_advertising\",\n    \"checkboxText\": \"Allow Advertising Cookies\",\n    \"simpleValueType\": true,\n    \"defaultValue\": false,\n    \"alwaysInSummary\": true\n  },\n  {\n    \"type\": \"CHECKBOX\",\n    \"name\": \"consent_third_party\",\n    \"checkboxText\": \"Allow Third Party Cookies\",\n    \"simpleValueType\": true,\n    \"defaultValue\": false,\n    \"alwaysInSummary\": true\n  },\n  {\n    \"type\": \"TEXT\",\n    \"name\": \"wait_for_update\",\n    \"displayName\": \"Timeout\",\n    \"simpleValueType\": true,\n    \"defaultValue\": 500,\n    \"valueUnit\": \"ms\",\n    \"alwaysInSummary\": false\n  },\n  {\n    \"type\": \"CHECKBOX\",\n    \"name\": \"cb_ads_data_redaction\",\n    \"checkboxText\": \"Redact Ads Data\",\n    \"simpleValueType\": true,\n    \"defaultValue\": false\n  },\n  {\n    \"type\": \"CHECKBOX\",\n    \"name\": \"cb_url_passthrough\",\n    \"checkboxText\": \"Pass Ad Click Information in URLs\",\n    \"simpleValueType\": true,\n    \"defaultValue\": false\n  },\n  {\n    \"type\": \"SIMPLE_TABLE\",\n    \"name\": \"regiosettings\",\n    \"displayName\": \"Regional settings (override default settings)\",\n    \"simpleTableColumns\": [\n      {\n        \"defaultValue\": \"\",\n        \"displayName\": \"Region (country codes, e.g. \\\"DE\\\" or \\\"FR,ES,IT\\\")\",\n        \"name\": \"region\",\n        \"type\": \"TEXT\"\n      },\n      {\n        \"defaultValue\": \"\",\n        \"displayName\": \"Setting\",\n        \"name\": \"storagetype\",\n        \"type\": \"SELECT\",\n        \"selectItems\": [\n          {\n            \"value\": \"analytics_storage\",\n            \"displayValue\": \"Allow Analytics Cookies\"\n          },\n          {\n            \"value\": \"ad_storage\",\n            \"displayValue\": \"Allow Advertising Cookies\"\n          },\n          {\n            \"value\": \"third_party_storage\",\n            \"displayValue\": \"Allow Third Party Cookies\"\n          },\n          {\n            \"value\": \"personalization_storage\",\n            \"displayValue\": \"Allow Personalization Cookies\"\n          },\n          {\n            \"value\": \"security_storage\",\n            \"displayValue\": \"Allow Security Cookies\"\n          },\n          {\n            \"value\": \"functionality_storage\",\n            \"displayValue\": \"Allow Functional Cookies\"\n          }\n        ]\n      },\n      {\n        \"defaultValue\": \"\",\n        \"displayName\": \"Status\",\n        \"name\": \"status\",\n        \"type\": \"SELECT\",\n        \"selectItems\": [\n          {\n            \"value\": \"granted\",\n            \"displayValue\": \"Granted\"\n          },\n          {\n            \"value\": \"denied\",\n            \"displayValue\": \"Denied\"\n          }\n        ]\n      }\n    ]\n  }\n]\n\n\n___SANDBOXED_JS_FOR_WEB_TEMPLATE___\n\n// Enter your template code here.\nconst log = require('logToConsole');\nconst makeInteger = require('makeInteger');\nconst gtagSet = require('gtagSet');\n//const setInWindow = require('setInWindow');\n\nconst injectScript = require('injectScript');\nconst encodeUriComponent = require('encodeUriComponent');\nconst queryPermission = require('queryPermission');\nconst consentmanager_id = data.consentmanager_id;\nlet consentmanager_cdn = data.consentmanager_cdn;\nlet consentmanager_host = data.consentmanager_host;\nconst google_consent_mode = data.google_consent_mode;\n\nif(!consentmanager_id || !consentmanager_cdn)\n{\n data.gtmOnFailure();\n}\n\nif(typeof(consentmanager_cdn) == 'string' && consentmanager_cdn.substring(0,8) == 'https://')\n{\n  consentmanager_cdn = consentmanager_cdn.substring(8,9999);\n}\nif(typeof(consentmanager_host) == 'string' && consentmanager_host.substring(0,8) == 'https://')\n{\n  consentmanager_host = consentmanager_host.substring(8,9999);\n}\n\nlet scriptUrl = 'https://'+ encodeUriComponent(consentmanager_cdn) +'/delivery/customcmp/'+ encodeUriComponent(consentmanager_id) +'.js';\n\nconst splitInput = (input) => { return input.split(',').map(entry => entry.trim()).filter(entry => entry.length !== 0); };\n\n\nif(google_consent_mode)\n{\n const setDefaultConsentState = require('setDefaultConsentState');\n const analytics_storage = data.consent_analytics;\n const ad_storage = data.consent_advertising;\n const third_party_storage = data.consent_third_party;\n const waitforupdate = makeInteger(data.wait_for_update);    \n// setInWindow('cmp_consentmode_timeout',waitforupdate, true);\n  if(data.regiosettings)\n  {\n data.regiosettings.forEach(settings => \n {\n   let countries = splitInput(settings.region);\n   let store = settings.storagetype;\n   if(settings.status != 'granted' && settings.status != 'denied'){settings.status = 'denied';}\n   if(store == 'analytics_storage'){setDefaultConsentState({ 'analytics_storage': settings.status, 'region': countries });}\n   else if(store == 'ad_storage'){setDefaultConsentState({ 'ad_storage': settings.status, 'region': countries });}\n   else if(store == 'third_party_storage'){setDefaultConsentState({ 'third_party_storage': settings.status, 'region': countries });}   \n  }); \n  }\n \n setDefaultConsentState({   \n   'analytics_storage': analytics_storage ? 'granted' : 'denied',\n   'ad_storage': ad_storage ? 'granted' : 'denied',\n   'third_party_storage': third_party_storage ? 'granted' : 'denied', \n   'wait_for_update': waitforupdate,\n });\n  \n gtagSet({ 'ads_data_redaction': data.cb_ads_data_redaction, 'url_passthrough': data.cb_url_passthrough});  \n}\n\nif (queryPermission('inject_script', scriptUrl)) \n{ \n injectScript(scriptUrl, data.gtmOnSuccess, data.gtmOnFailure);\n} \nelse \n{\n data.gtmOnFailure();\n}\n\n\n___WEB_PERMISSIONS___\n\n[\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"logging\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"environments\",\n          \"value\": {\n            \"type\": 1,\n            \"string\": \"debug\"\n          }\n        }\n      ]\n    },\n    \"clientAnnotations\": {\n      \"isEditedByUser\": true\n    },\n    \"isRequired\": true\n  },\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"inject_script\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"urls\",\n          \"value\": {\n            \"type\": 2,\n            \"listItem\": [\n              {\n                \"type\": 1,\n                \"string\": \"https://cdn.consentmanager.mgr.consensu.org/*\"\n              },\n              {\n                \"type\": 1,\n                \"string\": \"https://*.consentmanager.net/*\"\n              },\n              {\n                \"type\": 1,\n                \"string\": \"https://*.delivery.consentmanager.net/*\"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    \"clientAnnotations\": {\n      \"isEditedByUser\": true\n    },\n    \"isRequired\": true\n  },\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"access_consent\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"consentTypes\",\n          \"value\": {\n            \"type\": 2,\n            \"listItem\": [\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"consentType\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"analytics_storage\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": false\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  }\n                ]\n              },\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"consentType\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"ad_storage\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": false\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  }\n                ]\n              },\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"consentType\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"third_party_storage\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": false\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  }\n                ]\n              },\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"consentType\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"security_storage\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  }\n                ]\n              },\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"consentType\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"personalization_storage\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  }\n                ]\n              },\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"consentType\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"functionality_storage\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  }\n                ]\n              },\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"consentType\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"wait_for_update\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  }\n                ]\n              }\n            ]\n          }\n        }\n      ]\n    },\n    \"clientAnnotations\": {\n      \"isEditedByUser\": true\n    },\n    \"isRequired\": true\n  },\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"write_data_layer\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"keyPatterns\",\n          \"value\": {\n            \"type\": 2,\n            \"listItem\": [\n              {\n                \"type\": 1,\n                \"string\": \"ads_data_redaction\"\n              },\n              {\n                \"type\": 1,\n                \"string\": \"url_passthrough\"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    \"clientAnnotations\": {\n      \"isEditedByUser\": true\n    },\n    \"isRequired\": true\n  }\n]\n\n\n___TESTS___\n\nscenarios: []\n\n\n___NOTES___\n\nCreated on 9.8.2021, 07:07:11\nConsent default fixes 24.8.2021, 8:26\nDomain fixes 09.02.2022, 16:41\nConsent Mode Update 20.09.2022\n\n\n",
                "galleryReference": {
                    "host": "github.com",
                    "owner": "consentmanager",
                    "repository": "consentmanager_gtm",
                    "version": "95dde21",
                    "signature": "3dcda5c4bef65bef81b9045eaa78220f26de8f86b5d4e3516a503e583ca78f4e"
                }
            }
        ]
    }
}