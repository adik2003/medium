export function Avatar({Name}:{Name:string}){
return<><div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
<span className="text-xs font-medium text-gray-600 dark:text-gray-300 flex flex-col justify-center">{Name[0]}</span>
</div></>


}