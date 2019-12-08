using System;
using System.IO;

namespace File_manager
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Type here your file name//");
            string file_name = Console.ReadLine();
            Console.Write("Which expand of your file?//");
            string file_expand = Console.ReadLine();
            Console.Write("Type start possible date of modifying//");
            DateTime smod  = Convert.ToDateTime(Console.ReadLine());
            Console.Write("Type end of possible modifying date//");
            DateTime fmod = Convert.ToDateTime(Console.ReadLine());
            Console.WriteLine(FindFile($"{file_name}.{file_expand}", "D:\\"));
            Console.ReadLine();

            string FindFile(string name, string path)
            {
                string haveFound = "";
                
                FileInfo fileinf = new FileInfo(path + "\\" + name);
                if (fileinf.Exists & (smod < fileinf.LastWriteTime) & (fileinf.LastWriteTime < fmod))
                {
                    Console.Clear();
                    Console.WriteLine(fileinf.LastWriteTime);
                    haveFound = "File is here: " + path+"\\"+name;

                    StreamWriter sw = new StreamWriter(path+"\\history.txt", true);
                    sw.WriteLine("---------"+haveFound+"------");
                    sw.Close();

                    return haveFound;
                }
                else
                {
                    foreach (string p in Directory.GetDirectories(path))
                    {
                        if (haveFound.Length > 1)
                        {
                            break;
                        }
                        haveFound = FindFile(name, p);
                    }
                    return haveFound;
                }
            }
        }
        
    }
}
