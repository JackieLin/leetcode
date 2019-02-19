# Read from the file file.txt and output the tenth line to stdout.
i=0
while (( i++ < 10 ))
do
  read line
done < file.txt
echo $line