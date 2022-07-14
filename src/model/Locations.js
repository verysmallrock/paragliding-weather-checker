export const LOCATION_NAMES = {
	ED_LEVIN_300: 'edlevin300',
	ED_LEVIN_600: 'edlevin600',
	ED_LEVIN_LZ: 'edlevinlz',
	THE_DUMPS: 'thedumps',
	WATSON_PARK: 'watsonpark'
}

export const ENTRY_TYPES = {
	WEEWX: 'weewx',
	YOUTUBE: 'youtube',
	IFRAME: 'iframe',
	WATHER_GOV_FORECAST: 'weathergovforecast',
}

export const LOCATION_DATA = {
	[LOCATION_NAMES.ED_LEVIN_300]: {
		name: "Ed Levin 300' (Milpitas, CA)",
		latitude: '37.461140',
		longitude: '-121.864577',
		windyMapZoom: 11,
	},
	[LOCATION_NAMES.ED_LEVIN_600]: {
		name: "Ed Levin 600' (Milpitas, CA)",
		latitude: '37.461261',
		longitude: '-121.860443',
		windyMapZoom: 11,
	},
	[LOCATION_NAMES.ED_LEVIN_LZ]: {
		name: "Ed Levin LZ (Milpitas, CA)",
		latitude: '37.458230',
		longitude: '-121.866270',
		windyMapZoom: 11,
	},
	[LOCATION_NAMES.THE_DUMPS]: {
		name: "Mussle Rock Beach a.k.a 'The Dumps' (Daly City, CA)",
		latitude: '37.691742',
		longitude: '-122.497883',
		windyMapZoom: 11,
		entries: [
			{ 
				type: ENTRY_TYPES.WEEWX,
				subtitle: 'Nearby location (~1 mile south)',
				jsonUrl: 'https://www.mixdivr.org/wx/weewx/belchertown/json/weewx_data.json',
				url: 'https://www.mixdivr.org/wx/weewx/'
			},
			{ 
				type: ENTRY_TYPES.IFRAME,
				url: 'https://weather.pacificaview.net/', 
				width: 900, 
				height: 660 
			},
			{
				type: ENTRY_TYPES.WATHER_GOV_FORECAST,
				title: 'NWS forecast - Main Bowl'
			},
			{ 
				type: ENTRY_TYPES.YOUTUBE, 
				url: 'https://www.youtube.com/embed/vZEINdmawdc'
			},
			{ 
				type: ENTRY_TYPES.YOUTUBE, 
				url: 'https://www.youtube.com/embed/L6e1EEA-dQI'
			},
			
		]
	},
	[LOCATION_NAMES.WATSON_PARK]: {
		name: "Watson Park (San Jose, CA)",
		latitude: '37.357',
		longitude: '-121.876',
		windyMapZoom: 11,
	},
}

const urlParams = new URLSearchParams(window.location.search)

class Locations {
	selectedLocation = LOCATION_NAMES.THE_DUMPS

	get current() {
		return LOCATION_DATA[this.selectedLocation]
	}

	setLocation(newLocation) {
		this.selectedLocation = newLocation
		urlParams.set('location', newLocation)
		window.history.replaceState({}, 'Weather Checker', `?${urlParams.toString()}`)
	}
}

const singleton = new Locations()
const urlParamLocation = urlParams.get('location')
if (urlParamLocation && Object.values(LOCATION_NAMES).includes(urlParamLocation) ) {
	singleton.setLocation(urlParamLocation)
} else {
	urlParams.set('location', null)
}
export default singleton