package co.yedam;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import co.yedam.common.DataSource;
import co.yedam.reply.mapper.ReplyMapper;

public class MapperTest {
	public static void main(String[] args) {
	
		ReplyMapper mapper = DataSource.getInstance().openSession(true).getMapper(ReplyMapper.class);
		List<Map<String,Object>> list = mapper.countPerSido();
		for(Map<String, Object> map :list) {
			Set<Entry<String,Object>> set=map.entrySet();
			for(Entry<String,Object> entry : set) {
				System.out.println(entry.getKey()+":"+entry.getValue());
			}
			System.out.println("===================");
		}
		
	}
}
