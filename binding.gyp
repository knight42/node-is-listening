{
  "targets": [
    {
      "target_name": "detect",
      "sources": [ "src/detect.cc" ],
      "include_dirs" : [
          "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
