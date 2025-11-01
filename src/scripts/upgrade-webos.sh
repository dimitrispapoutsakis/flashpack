#!/bin/bash

ipkName="$1"
ipkDir="$2"
deviceName="$3"
appId="$4"

if [ -z "$ipkName" ] || [ -z "$ipkDir" ] || [ -z "$deviceName" ] || [ -z "$appId" ]; then
  echo "Usage: $0 <ipk_name> <ipk_dir> <device_name> <app_id>" >&2
  exit 1
fi

ipkPath="$ipkDir/$ipkName"

if [ ! -f "$ipkPath" ]; then
  echo "IPK file not found: $ipkPath" >&2
  exit 1
fi

ares-install -d "$deviceName" "$ipkPath"
INSTALL_EXIT_CODE=$?

if [ $INSTALL_EXIT_CODE -ne 0 ]; then
  echo "Installation failed with exit code $INSTALL_EXIT_CODE" >&2
  exit $INSTALL_EXIT_CODE
fi

ares-launch "$appId" -d "$deviceName"
LAUNCH_EXIT_CODE=$?

if [ $LAUNCH_EXIT_CODE -ne 0 ]; then
  echo "Launch failed with exit code $LAUNCH_EXIT_CODE" >&2
  exit 
fi