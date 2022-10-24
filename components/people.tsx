import {Person} from "./person";

const people = [
  {
    name: 'Milad',
    role: 'Senior Software Developer',
    imageUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMzIwIDMyMCIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6ICNkNWQ3ZTEiIC8+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIyNjAiIHN0eWxlPSJmaWxsOiAjYjkxODVjIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjcwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjgwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iMTAiIHg9IjE0MCIgeT0iMjgwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjkwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iMTAiIHg9IjE0MCIgeT0iMjkwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMzAwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iMTAiIHg9IjE0MCIgeT0iMzAwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMzEwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iMTAiIHg9IjE0MCIgeT0iMzEwIiBzdHlsZT0iZmlsbDogI2I5MTg1YyIgLz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjI2MCIgc3R5bGU9ImZpbGw6ICMyYjgzZjYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjI4MCIgc3R5bGU9ImZpbGw6ICMyYjgzZjYiIC8+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjEwIiB4PSIxNDAiIHk9IjI4MCIgc3R5bGU9ImZpbGw6ICMyYjgzZjYiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjMwMCIgc3R5bGU9ImZpbGw6ICMyYjgzZjYiIC8+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjEwIiB4PSIxNDAiIHk9IjMwMCIgc3R5bGU9ImZpbGw6ICMyYjgzZjYiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMTEwIiBzdHlsZT0iZmlsbDogI2VmZjJmYSIgLz48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTEwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iMTAiIHg9IjEzMCIgeT0iMTEwIiBzdHlsZT0iZmlsbDogI2VmZjJmYSIgLz48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iMTEwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIxMjAiIHN0eWxlPSJmaWxsOiAjZWZmMmZhIiAvPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgeD0iMTAwIiB5PSIxMjAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgeD0iMTMwIiB5PSIxMjAiIHN0eWxlPSJmaWxsOiAjZWZmMmZhIiAvPjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIxMjAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjEzMCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSIxMDAiIHk9IjEzMCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiB4PSIxMzAiIHk9IjEzMCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjEzMCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyMzAiIHk9IjEzMCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjE0MCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE0MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIyMzAiIHk9IjE0MCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjE5MCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjE1MCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSI2MCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogI2VmZjJmYSIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEwIiB4PSIxMjAiIHk9IjE2MCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMTcwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTEwIiBoZWlnaHQ9IjEwIiB4PSIxMjAiIHk9IjE3MCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMTgwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjEyMCIgeT0iMTgwIiBzdHlsZT0iZmlsbDogI2VmZjJmYSIgLz48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iMTgwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjE5MCIgeT0iMTgwIiBzdHlsZT0iZmlsbDogI2VmZjJmYSIgLz48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIxOTAiIHN0eWxlPSJmaWxsOiAjZWZmMmZhIiAvPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgeD0iMTYwIiB5PSIxOTAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMTkwIiB5PSIxOTAiIHN0eWxlPSJmaWxsOiAjZWZmMmZhIiAvPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjIwMCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSIxNjAiIHk9IjIwMCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIxOTAiIHk9IjIwMCIgc3R5bGU9ImZpbGw6ICNlZmYyZmEiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMjEwIiBzdHlsZT0iZmlsbDogI2VmZjJmYSIgLz48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjIxMCIgc3R5bGU9ImZpbGw6ICNmZWI5ZDUiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMjIwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMjIwIiBzdHlsZT0iZmlsbDogI2VmZjJmYSIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjIwIiBzdHlsZT0iZmlsbDogI2ZlYjlkNSIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMjIwIiBzdHlsZT0iZmlsbDogIzVhNDIzZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iMjIwIiBzdHlsZT0iZmlsbDogI2ZlYjlkNSIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMjIwIiBzdHlsZT0iZmlsbDogIzVhNDIzZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjIxMCIgeT0iMjIwIiBzdHlsZT0iZmlsbDogI2ZlYjlkNSIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIyMzAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxNDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjMwIiBzdHlsZT0iZmlsbDogI2ZlYjlkNSIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOiAjZmViOWQ1IiAvPjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgeD0iMTQwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOiAjNWE0MjNmIiAvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgeD0iMTkwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOiAjZmViOWQ1IiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjI1MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIyNTAiIHN0eWxlPSJmaWxsOiAjZmViOWQ1IiAvPjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjE0MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjE0MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI4MCIgeT0iMTUwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIxNTAiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIxNTAiIHN0eWxlPSJmaWxsOiAjZmYwZTBlIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIxNTAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIxNTAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIxNTAiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMjAwIiB5PSIxNTAiIHN0eWxlPSJmaWxsOiAjZmYwZTBlIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIxNTAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjE2MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogI2ZmMGUwZSIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogI2ZmMGUwZSIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjI0MCIgeT0iMTYwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjUwIiB5PSIxNzAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjE3MCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjE3MCIgc3R5bGU9ImZpbGw6ICNmZjBlMGUiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjE3MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE3MCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjE3MCIgc3R5bGU9ImZpbGw6ICNmZjBlMGUiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyNDAiIHk9IjE3MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMTgwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjgwIiB5PSIxODAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjE4MCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjE4MCIgc3R5bGU9ImZpbGw6ICNmZjBlMGUiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjE4MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjE4MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE4MCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjE4MCIgc3R5bGU9ImZpbGw6ICNmZjBlMGUiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyNDAiIHk9IjE4MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMTkwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjgwIiB5PSIxOTAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjE5MCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjE5MCIgc3R5bGU9ImZpbGw6ICNmZjBlMGUiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjE5MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjE5MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE5MCIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjE5MCIgc3R5bGU9ImZpbGw6ICNmZjBlMGUiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyNDAiIHk9IjE5MCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI4MCIgeT0iMjAwIiBzdHlsZT0iZmlsbDogIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiAjZmYwZTBlIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiAjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMjAwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiAjZmYwZTBlIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiAjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjIxMCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjIxMCIgc3R5bGU9ImZpbGw6ICMwMDAwMDAiIC8+PC9zdmc+',
    bio: 'Generally speaking, I have technological expertise. But feel free to ask me anything. If I\'m unable to respond to your question, I\'ll try to point you in the direction of someone who can.',
    twitterUrl: 'https://twitter.com/nekofar',
    discordUrl: 'https://discord.com/users/284122483219759105/',
  },
  // More people...
]

export default function People() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <Person key={person.name} person={person}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
