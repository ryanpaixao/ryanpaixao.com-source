#! /bin/bash

createRawFiles() {
  cd src/components/pages
  mkdir -p rawFiles
  rm -f ./rawFiles/rawFilesImport.js
  touch ./rawFiles/rawFilesImport.js
  touch ./filenames.tmp

  for file in *.js; 
    do 
      local rawFile=${file/.js/.raw.js};
      local noExtFile=${file/.js/}

      # copy src/components/pages .js files, rename as *.raw.js
      touch ./rawFiles/${rawFile};
      printf 'exports.rawCodeExample = `' > ./rawFiles/${rawFile}
      cat ${file} >> ./rawFiles/${rawFile}
      printf '`;' >> ./rawFiles/${rawFile}

      # update rawFilesImport.js with import statements
      printf "import ${noExtFile} from './${rawFile}';\n" >> ./rawFiles/rawFilesImport.js
      
      # add file name to filenames.tmp
      printf "${noExtFile}\n" >> ./filenames.tmp
  done

  # create const rawCode object in rawFilesImport.js
  printf "\nconst rawCode = {\n" >> ./rawFiles/rawFilesImport.js

  for item in $(cat ./filenames.tmp);
    do
      local name=${item}

      if [ ${item} == "HomePage" ]
        then
          name="";
      fi
      printf "  '""/${name}'"": ${item},\n" >> ./rawFiles/rawFilesImport.js
  done

  printf "};\n\n" >> ./rawFiles/rawFilesImport.js
  printf "export default rawCode;\n" >> ./rawFiles/rawFilesImport.js

  # clean up tmp file
  rm ./filenames.tmp
}

createRawFiles
